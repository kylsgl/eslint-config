import { FilesGlob } from '../../../constants';
import { type RuleConfig } from '../../../types';

const rules: RuleConfig = {
	files: FilesGlob.JS,
	name: 'airbnb/stylistic/es6',
	rules: {
		// require parens in arrow function arguments
		// https://eslint.style/rules/default/arrow-parens
		'@stylistic/arrow-parens': ['error', 'always'],

		// require space before/after arrow function's arrow
		// https://eslint.style/rules/default/arrow-spacing
		'@stylistic/arrow-spacing': ['error', { after: true, before: true }],

		// enforce the spacing around the * in generator functions
		// https://eslint.style/rules/default/generator-star-spacing
		'@stylistic/generator-star-spacing': [
			'error',
			{ after: true, before: false },
		],

		// disallow arrow functions where they could be confused with comparisons
		// https://eslint.style/rules/default/no-confusing-arrow
		'@stylistic/no-confusing-arrow': [
			'error',
			{
				allowParens: true,
			},
		],

		// enforce spacing between object rest-spread
		// https://eslint.style/rules/default/rest-spread-spacing
		'@stylistic/rest-spread-spacing': ['error', 'never'],

		// enforce usage of spacing in template strings
		// https://eslint.style/rules/default/template-curly-spacing
		'@stylistic/template-curly-spacing': 'error',

		// enforce spacing around the * in yield* expressions
		// https://eslint.style/rules/default/yield-star-spacing
		'@stylistic/yield-star-spacing': ['error', 'after'],
	},
};

export default rules;
