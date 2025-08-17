import { type Rule } from 'eslint';
import {
	type AssignmentExpression,
	type BinaryExpression,
	type ConditionalExpression,
	type IfStatement,
	type LogicalExpression,
	type Node,
	type Statement,
	type VariableDeclaration,
	type VariableDeclarator,
} from 'estree';

import { type NodeWithParent } from '../../../types';

const PASCAL_CASE_REGEXP = /^[A-Z][a-zA-Z0-9]*$/;

const SCREAMING_SNAKE_CASE_REGEXP = /^[A-Z0-9_]+$/;

const VALID_GUARD_EARLY_OPERATORS: ReadonlySet<string> = new Set<string>([
	'<=',
	'==',
	'===',
	'>=',
]);

const VALID_GUARD_OPERATORS: ReadonlySet<string> = new Set<string>([
	'!=',
	'!==',
	'<',
	'>',
]);

function hasValidExitStatement(statement: Statement): boolean {
	return (
		statement.type === 'ReturnStatement' || statement.type === 'ThrowStatement'
	);
}

function hasEarlyExitStatement(ifNode: IfStatement): boolean {
	return (
		hasValidExitStatement(ifNode.consequent) ||
		(ifNode.consequent.type === 'BlockStatement' &&
			ifNode.consequent.body.some(hasValidExitStatement))
	);
}

function isSameDivisorNode(node1: Node, node2: Node): boolean {
	switch (node1.type) {
		case 'Identifier': {
			return node2.type === 'Identifier' && node1.name === node2.name;
		}
		case 'MemberExpression': {
			return (
				node2.type === 'MemberExpression' &&
				isSameDivisorNode(node1.object, node2.object) &&
				isSameDivisorNode(node1.property, node2.property)
			);
		}
		default: {
			return false;
		}
	}
}

function hasValidBinaryExpression(
	testNode: BinaryExpression,
	divisorNode: NodeWithParent,
	earlyExitGuard: boolean,
): boolean {
	const isValidLeftNodeCheck: boolean =
		testNode.left.type === 'Literal' &&
		(testNode.left.value === 0 || testNode.left.value === 0n) &&
		isSameDivisorNode(testNode.right, divisorNode);

	const isValidRightNodeCheck: boolean =
		testNode.right.type === 'Literal' &&
		(testNode.right.value === 0 || testNode.right.value === 0n) &&
		isSameDivisorNode(testNode.left, divisorNode);

	const isValidOperator: boolean = (
		earlyExitGuard ? VALID_GUARD_EARLY_OPERATORS : VALID_GUARD_OPERATORS
	).has(testNode.operator);

	return (isValidLeftNodeCheck || isValidRightNodeCheck) && isValidOperator;
}

function hasValidLogicalExpression(
	testNode: LogicalExpression,
	earlyExitGuard: boolean,
	isValidExpressionLeft: boolean,
	isValidExpressionRight: boolean,
): boolean {
	switch (testNode.operator) {
		case '&&': {
			return earlyExitGuard
				? isValidExpressionLeft && isValidExpressionRight
				: isValidExpressionLeft || isValidExpressionRight;
		}
		case '||': {
			return earlyExitGuard
				? isValidExpressionLeft || isValidExpressionRight
				: isValidExpressionLeft && isValidExpressionRight;
		}
		default: {
			return false;
		}
	}
}

function hasValidIfStatement(
	ifNode: ConditionalExpression | IfStatement,
	testNode: Node,
	divisorNode: NodeWithParent,
	earlyExitGuard: boolean,
	isElseBlock: boolean,
): boolean {
	switch (testNode.type) {
		case 'BinaryExpression': {
			const hasExit: boolean =
				earlyExitGuard && ifNode.type === 'IfStatement'
					? isElseBlock || hasEarlyExitStatement(ifNode)
					: true;

			return (
				hasValidBinaryExpression(testNode, divisorNode, earlyExitGuard) &&
				hasExit
			);
		}
		case 'LogicalExpression': {
			const isValidExpressionLeft: boolean = hasValidIfStatement(
				ifNode,
				testNode.left,
				divisorNode,
				earlyExitGuard,
				isElseBlock,
			);

			const isValidExpressionRight: boolean = hasValidIfStatement(
				ifNode,
				testNode.right,
				divisorNode,
				earlyExitGuard,
				isElseBlock,
			);

			return hasValidLogicalExpression(
				testNode,
				earlyExitGuard,
				isValidExpressionLeft,
				isValidExpressionRight,
			);
		}
		default: {
			return false;
		}
	}
}

function hasGuardEarly(
	node: NodeWithParent,
	divisorNode: NodeWithParent,
): boolean {
	const handleIfStatement = (statement: Statement): boolean =>
		statement.type === 'IfStatement'
			? hasValidIfStatement(statement, statement.test, divisorNode, true, false)
			: false;

	let currentNode: NodeWithParent = node;

	while (currentNode.parent != null) {
		if (
			currentNode.parent.type === 'BlockStatement' &&
			currentNode.parent.body.some(handleIfStatement)
		) {
			return true;
		}

		currentNode = currentNode.parent;
	}

	return false;
}

function hasGuard(node: NodeWithParent, divisorNode: NodeWithParent): boolean {
	let currentNode: NodeWithParent = node;

	while (currentNode.parent != null) {
		if (
			(currentNode.parent.type === 'IfStatement' ||
				currentNode.parent.type === 'ConditionalExpression') &&
			hasValidIfStatement(
				currentNode.parent,
				currentNode.parent.test,
				divisorNode,
				currentNode.parent.alternate === currentNode,
				currentNode.parent.alternate === currentNode,
			)
		) {
			return true;
		}

		currentNode = currentNode.parent;
	}

	return false;
}

function hasNonZeroInitializer(
	node: Node,
	nonZeroInitializerNames: Set<string>,
): boolean {
	return node.type === 'Identifier' && nonZeroInitializerNames.has(node.name);
}

function hasRegExpMatch(node: Node, regExp: RegExp, enabled: boolean): boolean {
	if (enabled) {
		if (node.type === 'Identifier') {
			return regExp.test(node.name);
		}

		if (node.type === 'MemberExpression' && node.object.type === 'Identifier') {
			return regExp.test(node.object.name);
		}
	}

	return false;
}

function isSafeDivision(
	node: AssignmentExpression | BinaryExpression,
	nonZeroInitializerNames: Set<string>,
	ignorePascalCase: boolean,
	ignoreScreamingSnakeCase: boolean,
): boolean {
	return (
		/**
		 * Handle literal 0 number
		 */
		(node.right.type === 'Literal' &&
			typeof node.right.value === 'number' &&
			node.right.value !== 0) ||
		/**
		 * Handle literal 0 big int
		 */
		(node.right.type === 'Literal' &&
			typeof node.right.value === 'bigint' &&
			node.right.value !== 0n) ||
		/**
		 * Handle divisors with PascalCase
		 */
		hasRegExpMatch(node.right, PASCAL_CASE_REGEXP, ignorePascalCase) ||
		/**
		 * Handle divisors with SCREAMING_SNAKE_CASE
		 */
		hasRegExpMatch(
			node.right,
			SCREAMING_SNAKE_CASE_REGEXP,
			ignoreScreamingSnakeCase,
		) ||
		/**
		 * Handle constant variables initialized with a non-zero value
		 */
		hasNonZeroInitializer(node.right, nonZeroInitializerNames) ||
		/**
		 * Handle early guard if statements: if (divisor === 0) return; 1 / divisor
		 */
		hasGuardEarly(node, node.right) ||
		/**
		 * Handle guard if statements:
		 * if (divisor !== 0) 1 / divisor
		 * if (divisor === 0) 0 else 1 / divisor
		 */
		hasGuard(node, node.right) ||
		/**
		 * Handle nested binary expression cases like: const result = 1 / (1 * 0)
		 */
		(node.right.type === 'BinaryExpression' &&
			isSafeDivision(
				node.right,
				nonZeroInitializerNames,
				ignorePascalCase,
				ignoreScreamingSnakeCase,
			))
	);
}

interface NoUnsafeDivisionOptions {
	readonly ignorePascalCase?: boolean;
	readonly ignoreScreamingSnakeCase?: boolean;
}

const noUnsafeDivision: Rule.RuleModule = {
	create(context: Rule.RuleContext): Rule.NodeListener {
		const opts = context.options.at(0) as NoUnsafeDivisionOptions | undefined;

		const ignorePascalCase: boolean = opts?.ignorePascalCase ?? true;

		const ignoreScreamingSnakeCase: boolean =
			opts?.ignoreScreamingSnakeCase ?? true;

		/**
		 * Constant variable names with values that are non-zero numbers
		 */
		const nonZeroConstantVariableNames = new Set<string>();

		return {
			AssignmentExpression: (
				node: AssignmentExpression & Rule.NodeParentExtension,
			): void => {
				if (
					(node.operator !== '/=' && node.operator !== '%=') ||
					isSafeDivision(
						node,
						nonZeroConstantVariableNames,
						ignorePascalCase,
						ignoreScreamingSnakeCase,
					)
				) {
					return;
				}

				context.report({
					messageId: 'noUnsafeDivision',
					node: node.right,
				});
			},
			BinaryExpression: (
				node: BinaryExpression & Rule.NodeParentExtension,
			): void => {
				if (
					(node.operator !== '/' && node.operator !== '%') ||
					isSafeDivision(
						node,
						nonZeroConstantVariableNames,
						ignorePascalCase,
						ignoreScreamingSnakeCase,
					)
				) {
					return;
				}

				context.report({
					messageId: 'noUnsafeDivision',
					node: node.right,
				});
			},
			VariableDeclaration: (
				node: Rule.NodeParentExtension & VariableDeclaration,
			): void => {
				if (node.kind !== 'const') {
					return;
				}

				node.declarations.forEach((variable: VariableDeclarator): void => {
					if (
						variable.id.type === 'Identifier' &&
						variable.init?.type === 'Literal' &&
						((typeof variable.init.value === 'number' &&
							variable.init.value !== 0) ||
							(typeof variable.init.value === 'bigint' &&
								variable.init.value !== 0n))
					) {
						nonZeroConstantVariableNames.add(variable.id.name);
					}
				});
			},
		};
	},
	meta: {
		messages: {
			noUnsafeDivision:
				'Potential division by zero. Ensure that the divisor is non-zero.',
		},
		schema: [
			{
				additionalProperties: false,
				properties: {
					ignorePascalCase: {
						default: true,
						type: 'boolean',
					},
					ignoreScreamingSnakeCase: {
						default: true,
						type: 'boolean',
					},
				},
				type: 'object',
			},
		],
		type: 'problem',
	},
};

export default noUnsafeDivision;
