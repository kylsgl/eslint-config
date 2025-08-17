import { type Linter } from 'eslint';
import tsEslint from 'typescript-eslint';

import { FilesGlob } from '../constants';
import { type RuleConfig } from '../types';
import { extractConfigRules } from '../utils';
import { airbnbTypescriptConfig } from './airbnb';

const typeScriptRulesObj: RuleConfig['rules'] = {
	'@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
	'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
	'@typescript-eslint/consistent-type-imports': [
		'error',
		{
			disallowTypeAnnotations: true,
			fixStyle: 'inline-type-imports',
			prefer: 'type-imports',
		},
	],
	'@typescript-eslint/explicit-function-return-type': [
		'error',
		{ allowExpressions: false },
	],
	'@typescript-eslint/explicit-member-accessibility': 'error',
	'@typescript-eslint/explicit-module-boundary-types': 'error',
	'@typescript-eslint/member-ordering': 'error',
	'@typescript-eslint/method-signature-style': 'error',
	'@typescript-eslint/naming-convention': [
		'error',
		{
			format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
			selector: 'variable',
		},
		{
			format: ['camelCase', 'PascalCase'],
			selector: 'function',
		},
		{
			format: ['PascalCase'],
			selector: 'typeLike',
		},
		{
			format: null,
			modifiers: ['destructured'],
			selector: 'variable',
		},
	],
	'@typescript-eslint/no-empty-object-type': [
		'error',
		{ allowInterfaces: 'with-single-extends' },
	],
	'@typescript-eslint/no-inferrable-types': [
		'error',
		{
			ignoreParameters: true,
			ignoreProperties: true,
		},
	],
	'@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',
	'@typescript-eslint/no-unused-vars': [
		'error',
		{
			ignoreRestSiblings: true,
		},
	],
	'@typescript-eslint/no-use-before-define': [
		'error',
		{
			allowNamedExports: false,
			classes: true,
			enums: true,
			functions: false,
			ignoreTypeReferences: true,
			typedefs: false,
			variables: true,
		},
	],
	'@typescript-eslint/no-useless-empty-export': 'error',
	'@typescript-eslint/prefer-enum-initializers': 'error',
	'@typescript-eslint/prefer-for-of': 'off',
};

const typeScriptTypeCheckedRulesObj: RuleConfig['rules'] = {
	'@typescript-eslint/consistent-type-exports': [
		'error',
		{
			fixMixedExportsWithInlineTypeSpecifier: true,
		},
	],
	'@typescript-eslint/no-unnecessary-qualifier': 'error',
	// TODO: enable? currently breaks alot of stuff
	'@typescript-eslint/no-unnecessary-type-parameters': 'off',
	'@typescript-eslint/prefer-nullish-coalescing': [
		'error',
		{
			ignoreConditionalTests: false,
			ignoreMixedLogicalExpressions: false,
		},
	],
	'@typescript-eslint/prefer-readonly': 'error',
	'@typescript-eslint/promise-function-async': 'error',
	'@typescript-eslint/restrict-template-expressions': [
		'error',
		{
			allowAny: false,
			allowBoolean: true,
			allowNever: false,
			allowNullish: false,
			allowNumber: true,
			allowRegExp: false,
		},
	],
	'@typescript-eslint/strict-boolean-expressions': [
		'error',
		{
			allowAny: false,
			allowNullableBoolean: false,
			allowNullableNumber: false,
			allowNullableObject: false,
			allowNullableString: false,
			allowNumber: false,
			allowString: false,
		},
	],
};

const baseConfig: RuleConfig = {
	files: FilesGlob.TS,
	name: 'typescript/base',
	rules: {
		...extractConfigRules(tsEslint.configs.recommended as Linter.Config[]),
		...extractConfigRules(tsEslint.configs.strict as Linter.Config[]),
		...extractConfigRules(tsEslint.configs.stylistic as Linter.Config[]),
		...typeScriptRulesObj,
	},
};

const baseTypeCheckedConfig: RuleConfig = {
	files: FilesGlob.TS,
	name: 'typescript/base-type-checked',
	rules: {
		...extractConfigRules(
			tsEslint.configs.recommendedTypeChecked as Linter.Config[],
		),
		...extractConfigRules(
			tsEslint.configs.strictTypeChecked as Linter.Config[],
		),
		...extractConfigRules(
			tsEslint.configs.stylisticTypeChecked as Linter.Config[],
		),
		...typeScriptRulesObj,
		...typeScriptTypeCheckedRulesObj,
	},
};

const declarationConfig: RuleConfig = {
	files: ['**/*.d.ts'],
	name: 'typescript/declaration',
	rules: {
		'@typescript-eslint/consistent-type-imports': 'off',
		'@typescript-eslint/naming-convention': 'off',
		'no-template-curly-in-string': 'off',
		'no-underscore-dangle': 'off',
		'no-var': 'off',
		'vars-on-top': 'off',
	},
};

const promiseConfig: RuleConfig = {
	files: FilesGlob.TS,
	name: 'promise/typescript',
	rules: {
		// Rules that are already covered or causes conflitcs in the TypeScript config
		'promise/catch-or-return': 'off',
	},
};

const sonarJsConfig: RuleConfig = {
	files: FilesGlob.TS,
	name: 'sonarjs/typescript',
	rules: {
		// Rules that are already covered or causes conflitcs in the TypeScript config
		'sonarjs/argument-type': 'off',
		'sonarjs/bitwise-operators': 'off',
		'sonarjs/class-name': 'off',
		'sonarjs/deprecation': 'off',
		'sonarjs/function-return-type': 'off',
		'sonarjs/future-reserved-words': 'off',
		'sonarjs/in-operator-type-error': 'off',
		'sonarjs/inconsistent-function-call': 'off',
		'sonarjs/new-operator-misuse': 'off',
		'sonarjs/no-array-delete': 'off',
		'sonarjs/no-associative-arrays': 'off',
		'sonarjs/no-duplicate-in-composite': 'off',
		'sonarjs/no-extra-arguments': 'off',
		'sonarjs/no-fallthrough': 'off',
		'sonarjs/no-global-this': 'off',
		'sonarjs/no-gratuitous-expressions': 'off',
		'sonarjs/no-implicit-global': 'off',
		'sonarjs/no-literal-call': 'off',
		'sonarjs/no-redundant-boolean': 'off',
		'sonarjs/no-unused-vars': 'off',
		'sonarjs/no-use-of-empty-return-value': 'off',
		'sonarjs/null-dereference': 'off',
		'sonarjs/prefer-read-only-props': 'off',
		'sonarjs/prefer-regexp-exec': 'off',
		'sonarjs/unused-import': 'off',
		'sonarjs/updated-const-var': 'off',
	},
};

const tsdocConfig: RuleConfig = {
	files: FilesGlob.TS,
	name: 'tsdoc/base',
	rules: {
		'tsdoc/syntax': 'warn',
	},
};

export const typeScriptRules: readonly RuleConfig[] = [
	...airbnbTypescriptConfig,
	baseConfig,
	declarationConfig,
	sonarJsConfig,
	tsdocConfig,
];

export const typeScriptTypeCheckedRules: readonly RuleConfig[] = [
	...airbnbTypescriptConfig,
	baseTypeCheckedConfig,
	declarationConfig,
	promiseConfig,
	sonarJsConfig,
	tsdocConfig,
];
