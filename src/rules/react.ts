import testingLibrary from 'eslint-plugin-testing-library';
import globals from 'globals';

import { FilesGlob } from '../constants';
import { type RuleConfig } from '../types';
import { airbnbReactConfig } from './airbnb';

const baseConfig: RuleConfig = {
	files: FilesGlob.JSX,
	languageOptions: {
		globals: globals.browser,
	},
	name: 'react/base',
	rules: {
		'no-param-reassign': [
			'error',
			{
				ignorePropertyModificationsFor: [
					'acc', // for reduce accumulators
					'accumulator', // for reduce accumulators
					'e', // for e.returnvalue
					'ctx', // for Koa routing
					'context', // for Koa routing
					'req', // for Express requests
					'request', // for Express requests
					'res', // for Express responses
					'response', // for Express responses
					'$scope', // for Angular 1 scopes
					'staticContext', // for ReactRouter context
				],
				ignorePropertyModificationsForRegex: [
					'^ref$', // for params that is named "ref"
					String.raw`\w+Ref$`, // for params that ends with "Ref"
				],
				props: true,
			},
		],
		'react-hooks/react-compiler': 'error',
		'react/checked-requires-onchange-or-readonly': 'error',
		// 'react/jsx-props-no-spreading': [
		// 	'error',
		// 	{
		// 		custom: 'enforce',
		// 		exceptions: [],
		// 		explicitSpread: 'enforce',
		// 		html: 'ignore',
		// 	},
		// ],
		'react/function-component-definition': [
			'error',
			{
				namedComponents: ['function-declaration'],
				unnamedComponents: [],
			},
		],
		'react/jsx-curly-brace-presence': [
			'error',
			{ children: 'always', propElementValues: 'always', props: 'never' },
		],
		'react/jsx-key': 'error',
		'react/jsx-max-depth': ['error', { max: 5 }],
		'react/jsx-no-leaked-render': ['error', { validStrategies: ['ternary'] }],
		'react/jsx-no-literals': 'error',
		'react/jsx-props-no-spreading': 'off',
		'react/prefer-read-only-props': 'error',
		'react/react-in-jsx-scope': 'off',
	},
};

const reactRefreshConfig: RuleConfig = {
	files: FilesGlob.JSX,
	name: 'react/refresh',
	rules: {
		'react-refresh/only-export-components': [
			'error',
			{ allowConstantExport: true },
		],
	},
};

const reactTestsConfig: RuleConfig = {
	files: FilesGlob.JSXTests,
	name: 'react/tests',
	rules: {
		...testingLibrary.configs['flat/react'].rules,
		'jsx-a11y/control-has-associated-label': 'off',
	},
};

export default [
	...airbnbReactConfig,
	baseConfig,
	reactRefreshConfig,
	reactTestsConfig,
];
