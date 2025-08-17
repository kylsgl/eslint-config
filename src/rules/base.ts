import { type Linter } from 'eslint';
import packageJSON from 'eslint-plugin-package-json';
import perfectionist from 'eslint-plugin-perfectionist';
// @ts-expect-error - no types
import promise from 'eslint-plugin-promise';
import * as regexp from 'eslint-plugin-regexp';
import sonarjs from 'eslint-plugin-sonarjs';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';

import { FilesGlob } from '../constants';
import { type RuleConfig } from '../types';
import { airbnbConfig, airbnbStylisticConfig } from './airbnb';

const baseConfig: RuleConfig = {
	files: FilesGlob.JS,
	languageOptions: {
		globals: globals.builtin,
	},
	name: 'base',
	rules: {
		curly: ['error', 'all'],
		'no-console': ['warn', { allow: ['error', 'info', 'warn'] }],
		'no-empty-function': 'error',
		// 'no-param-reassign': [
		// 	'error',
		// 	{
		// 		ignorePropertyModificationsFor: [
		// 			'acc', // for reduce accumulators
		// 			'accumulator', // for reduce accumulators
		// 			'e', // for e.returnvalue
		// 			'ctx', // for Koa routing
		// 			'context', // for Koa routing
		// 			'req', // for Express requests
		// 			'request', // for Express requests
		// 			'res', // for Express responses
		// 			'response', // for Express responses
		// 			'$scope', // for Angular 1 scopes
		// 			'staticContext', // for ReactRouter context
		// 		],
		// 		ignorePropertyModificationsForRegex: [
		// 			String.raw`^accumulator(_?\d+)$`, // for reduce accumulators such as 'accumulator1', 'accumulator_1', etc.
		// 		],
		// 		props: true,
		// 	},
		// ],
		'no-restricted-syntax': [
			'error',
			{
				message:
					'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
				selector: 'ForInStatement',
			},
			{
				message:
					'`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
				selector: 'WithStatement',
			},
		],
		'no-unused-expressions': 'error',
		'no-unused-labels': 'off',
		'prefer-template': 'off',
		'require-await': 'error',
	},
};

const configsConfig: RuleConfig = {
	files: ['**/configs/**', '**/*.config.{js,cjs,mjs,ts,cts,mts}'],
	name: 'configs/base',
	rules: {
		'no-template-curly-in-string': 'off',
		'no-underscore-dangle': 'off',
	},
};

const kylsglConfig: RuleConfig = {
	files: FilesGlob.JS,
	name: 'kylsgl/base',
	rules: {
		'kylsgl/no-top-level-function-expression': 'error',
		'kylsgl/no-unsafe-division': 'error',
	},
};

const nodeConfig: RuleConfig = {
	files: FilesGlob.JS,
	languageOptions: {
		globals: globals.node,
	},
	name: 'node/base',
	rules: {},
};

const packageJSONConfig: RuleConfig = {
	files: FilesGlob.PackageJSON,
	name: 'packageJSON/base',
	rules: {
		...packageJSON.configs.recommended.rules,
		'package-json/no-redundant-files': 'error',
		'package-json/require-author': 'error',
	},
};

const perfectionistConfig: RuleConfig = {
	files: FilesGlob.JS,
	name: 'perfectionist/base',
	rules: {
		...perfectionist.configs['recommended-natural'].rules,
		'perfectionist/sort-classes': 'off',
		'perfectionist/sort-exports': 'off',
		'perfectionist/sort-imports': 'off',
		'perfectionist/sort-modules': 'off',
		'perfectionist/sort-named-exports': 'off',
		'perfectionist/sort-named-imports': 'off',
		'perfectionist/sort-union-types': [
			'error',
			{
				groups: [
					'conditional',
					'function',
					'import',
					'intersection',
					'keyword',
					'literal',
					'named',
					'object',
					'operator',
					'tuple',
					'union',
					'nullish',
				],
				order: 'asc',
				type: 'natural',
			},
		],
		// 'perfectionist/sort-variable-declarations': 'off',
	},
};

const promiseConfig: RuleConfig = {
	files: FilesGlob.JS,
	name: 'promise/base',
	rules: {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		...(promise.configs['flat/recommended']
			.rules as Partial<Linter.RulesRecord>),
		'promise/always-return': ['error', { ignoreLastCallback: true }],
		'promise/catch-or-return': ['error', { allowFinally: true }],
	},
};

const regexpConfig: RuleConfig = {
	files: FilesGlob.JS,
	name: 'regexp/base',
	rules: {
		...regexp.configs['flat/recommended'].rules,
	},
};

const serviceWorkerConfig: RuleConfig = {
	files: ['**/service.worker.{js,cjs,mjs,ts,cts,mts}'],
	languageOptions: {
		globals: globals.serviceworker,
	},
	name: 'service-worker/base',
	rules: {
		'no-restricted-globals': 'off',
		'no-underscore-dangle': 'off',
	},
};

const sonarJsConfig: RuleConfig = {
	files: FilesGlob.JS,
	name: 'sonarjs/base',
	rules: {
		...sonarjs.configs.recommended.rules,
		// Rules that are already covered or causes conflitcs in the Airbnb config
		'sonarjs/array-callback-without-return': 'off',
		'sonarjs/assertions-in-tests': 'off',
		'sonarjs/aws-apigateway-public-api': 'off', // Very slow rule
		'sonarjs/aws-restricted-ip-admin-access': 'off', // Very slow rule
		'sonarjs/block-scoped-var': 'off',
		'sonarjs/call-argument-line': 'off',
		'sonarjs/chai-determinate-assertion': 'off',
		'sonarjs/code-eval': 'off',
		'sonarjs/constructor-for-side-effects': 'off',
		'sonarjs/different-types-comparison': 'off',
		'sonarjs/disabled-timeout': 'off',
		'sonarjs/for-loop-increment-sign': 'off',
		'sonarjs/jsx-no-leaked-render': 'off',
		'sonarjs/label-position': 'off',
		'sonarjs/mouse-events-a11y': 'off',
		'sonarjs/new-cap': 'off',
		'sonarjs/no-array-index-key': 'off',
		'sonarjs/no-case-label-in-switch': 'off',
		'sonarjs/no-commented-code': 'off',
		'sonarjs/no-delete-var': 'off',
		'sonarjs/no-empty-test-file': 'off',
		'sonarjs/no-globals-shadowing': 'off',
		'sonarjs/no-hook-setter-in-body': 'off',
		'sonarjs/no-identical-conditions': 'off',
		'sonarjs/no-invalid-await': 'off',
		'sonarjs/no-invalid-regexp': 'off',
		'sonarjs/no-labels': 'off',
		'sonarjs/no-nested-assignment': 'off',
		'sonarjs/no-nested-functions': 'off',
		'sonarjs/no-one-iteration-loop': 'off',
		'sonarjs/no-parameter-reassignment': 'off',
		'sonarjs/no-primitive-wrappers': 'off',
		'sonarjs/no-same-line-conditional': 'off',
		'sonarjs/no-skipped-tests': 'off',
		'sonarjs/no-try-promise': 'off',
		'sonarjs/no-undefined-argument': 'off',
		'sonarjs/no-unenclosed-multiline-block': 'off',
		'sonarjs/no-unthrown-error': 'off',
		'sonarjs/no-useless-catch': 'off',
		'sonarjs/no-useless-increment': 'off',
		'sonarjs/non-existent-operator': 'off',
		'sonarjs/prefer-default-last': 'off',
		'sonarjs/pseudo-random': 'off',
		'sonarjs/stable-tests': 'off',
		'sonarjs/todo-tag': 'off',
		'sonarjs/void-use': 'off',
	},
};

const unicornConfig: RuleConfig = {
	files: FilesGlob.JS,
	name: 'unicorn/base',
	rules: {
		...unicorn.configs.recommended.rules,
		'unicorn/expiring-todo-comments': 'off',
		'unicorn/filename-case': [
			'error',
			{
				cases: {
					kebabCase: true,
					pascalCase: true,
				},
				ignore: [
					String.raw`\[[^\]]{1,100}\]\.(js|jsx|ts|tsx)$`, // Ignore file names wrapped in square brackets
				],
			},
		],
		'unicorn/no-array-callback-reference': 'off',
		'unicorn/no-array-for-each': 'off',
		'unicorn/no-array-reduce': 'off',
		'unicorn/no-array-reverse': 'off', // Already covered by 'sonarjs/no-misleading-array-reverse', which also supports 'sort' method
		'unicorn/no-for-loop': 'off',
		'unicorn/no-null': 'off',
		'unicorn/numeric-separators-style': [
			'error',
			{ number: { groupLength: 3, minimumDigits: 0 } },
		],
		'unicorn/prefer-dom-node-text-content': 'off',
		'unicorn/prefer-query-selector': 'off',
		'unicorn/prevent-abbreviations': [
			'off',
			{
				checkFilenames: false,
			},
		],
	},
};

const workerConfig: RuleConfig = {
	files: ['**/*.worker.{js,cjs,mjs,ts,cts,mts}'],
	ignores: ['**/service.worker.{js,cjs,mjs,ts,cts,mts}'],
	languageOptions: {
		globals: globals.worker,
	},
	name: 'worker/base',
	rules: {
		'no-restricted-globals': 'off',
		'no-underscore-dangle': 'off',
	},
};

export default [
	...airbnbConfig,
	...airbnbStylisticConfig,
	baseConfig,
	configsConfig,
	kylsglConfig,
	nodeConfig,
	packageJSONConfig,
	perfectionistConfig,
	promiseConfig,
	regexpConfig,
	serviceWorkerConfig,
	sonarJsConfig,
	unicornConfig,
	workerConfig,
];
