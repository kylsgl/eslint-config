import { type Linter } from 'eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import testingLibrary from 'eslint-plugin-testing-library';
import globals from 'globals';

import { FilesGlob } from '../constants';
import { type RuleConfig } from '../types';
import { extractConfigRules } from '../utils';
import { airbnbReactConfig } from './airbnb';

const baseConfig: RuleConfig = {
	files: FilesGlob.JSX,
	languageOptions: {
		globals: globals.browser,
	},
	name: 'react/base',
	rules: {
		...extractConfigRules([
			// @ts-expect-error - no types
			(reactHooks.configs as Record<string, Linter.Config>)[
				'recommended-latest'
			],
		]),
		'@stylistic/jsx-curly-brace-presence': [
			'error',
			{ children: 'always', propElementValues: 'always', props: 'never' },
		],
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
		'react-dom/no-flush-sync': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'react-naming-convention/context-name': 'error',
		'react-naming-convention/id-name': 'error',
		'react-naming-convention/ref-name': 'error',
		'react-web-api/no-leaked-event-listener': 'error',
		'react-web-api/no-leaked-interval': 'error',
		'react-web-api/no-leaked-resize-observer': 'error',
		'react-web-api/no-leaked-timeout': 'error',
		'react-x/no-class-component': 'error',
		'react-x/no-clone-element': 'error',
		'react-x/no-unnecessary-use-prefix': 'error',
		'react-x/no-use-context': 'error',
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
