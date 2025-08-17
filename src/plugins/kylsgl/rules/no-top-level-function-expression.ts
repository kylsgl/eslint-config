import { type Rule, type Scope } from 'eslint';
import { type VariableDeclarator } from 'estree';

const NODE_TYPES: ReadonlySet<Rule.NodeTypes> = new Set([
	'ArrowFunctionExpression',
	'FunctionExpression',
]);

const SCOPE_TYPES: ReadonlySet<string> = new Set(['global', 'module']);

const noTopLevelFunctionExpression: Rule.RuleModule = {
	create(context: Rule.RuleContext): Rule.NodeListener {
		return {
			VariableDeclarator: (
				node: Rule.NodeParentExtension & VariableDeclarator,
			): void => {
				if (node.init?.type === undefined || !NODE_TYPES.has(node.init.type)) {
					return;
				}

				const scope: Scope.Scope = context.sourceCode.getScope(node);

				const isTopLevel: boolean = SCOPE_TYPES.has(scope.type);

				if (!isTopLevel) {
					return;
				}

				context.report({
					messageId: 'noTopLevelFunctionExpression',
					node: node.parent,
				});
			},
		};
	},
	meta: {
		messages: {
			noTopLevelFunctionExpression:
				'Top-level function expressions are forbidden. Use function declarations instead.',
		},
		type: 'suggestion',
	},
};

export default noTopLevelFunctionExpression;
