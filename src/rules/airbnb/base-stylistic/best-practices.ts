import { FilesGlob } from '../../../constants';
import { type RuleConfig } from '../../../types';

const rules: RuleConfig = {
	files: FilesGlob.JS,
	name: 'airbnb/stylistic/best-practices',
	rules: {
		// enforces consistent newlines before or after dots
		// https://eslint.style/rules/default/dot-location
		'@stylistic/dot-location': ['error', 'property'],

		// disallow the use of leading or trailing decimal points in numeric literals
		// https://eslint.style/rules/default/no-floating-decimal
		'@stylistic/no-floating-decimal': 'error',

		// disallow use of multiple spaces
		// https://eslint.style/rules/default/no-multi-spaces
		'@stylistic/no-multi-spaces': [
			'error',
			{
				ignoreEOLComments: false,
			},
		],

		// require immediate function invocation to be wrapped in parentheses
		// https://eslint.style/rules/default/wrap-iife
		'@stylistic/wrap-iife': [
			'error',
			'outside',
			{ functionPrototypeMethods: false },
		],
	},
};

export default rules;
