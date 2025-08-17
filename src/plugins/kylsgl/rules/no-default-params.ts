import { type Rule } from 'eslint';
import {
	type ArrowFunctionExpression,
	type FunctionDeclaration,
	type FunctionExpression,
	type Pattern,
} from 'estree';

type FunctionNode =
	| ArrowFunctionExpression
	| FunctionDeclaration
	| FunctionExpression;

const noDefaultParams: Rule.RuleModule = {
	create(context: Rule.RuleContext): Rule.NodeListener {
		const handleDefaultParams = (
			node: FunctionNode & Rule.NodeParentExtension,
		): void => {
			node.params.forEach((param: Pattern): void => {
				if (param.type === 'AssignmentPattern') {
					context.report({
						messageId: 'noDefaultParams',
						node: param,
					});
				}
			});
		};

		return {
			ArrowFunctionExpression: handleDefaultParams,
			FunctionDeclaration: handleDefaultParams,
			FunctionExpression: handleDefaultParams,
		};
	},
	meta: {
		messages: {
			noDefaultParams: 'Parameter default value assignments are forbidden.',
		},
		type: 'suggestion',
	},
};

export default noDefaultParams;
