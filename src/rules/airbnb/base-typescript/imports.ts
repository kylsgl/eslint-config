import { FilesGlob } from '../../../constants';
import { type RuleConfig } from '../../../types';

const rules: RuleConfig = {
	files: FilesGlob.TS,
	name: 'airbnb/typescript/import',
	rules: {
		// TypeScript provides the same checks as part of standard type checking
		// https://github.com/typescript-eslint/typescript-eslint/blob/13583e65f5973da2a7ae8384493c5e00014db51b/docs/linting/TROUBLESHOOTING.md#eslint-plugin-import
		'import-x/default': 'off',

		// Ensure consistent use of file extension within the import path
		// https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/extensions.md
		// 'import-x/extensions': [
		// 	'error',
		// 	'ignorePackages',
		// 	{
		// 		js: 'never',
		// 		jsx: 'never',
		// 		mjs: 'never',
		// 		mts: 'never',
		// 		ts: 'never',
		// 		tsx: 'never',
		// 	},
		// ],
		'import-x/extensions': 'off',

		// TypeScript provides the same checks as part of standard type checking
		// https://github.com/typescript-eslint/typescript-eslint/blob/13583e65f5973da2a7ae8384493c5e00014db51b/docs/linting/TROUBLESHOOTING.md#eslint-plugin-import
		'import-x/named': 'off',

		// TypeScript provides the same checks as part of standard type checking
		// https://github.com/typescript-eslint/typescript-eslint/blob/13583e65f5973da2a7ae8384493c5e00014db51b/docs/linting/TROUBLESHOOTING.md#eslint-plugin-import
		'import-x/namespace': 'off',

		// Forbid the use of extraneous packages
		// https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
		// paths are treated both as absolute paths, and relative to process.cwd()
		'import-x/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'test/**', // tape, common npm pattern
					'tests/**', // also common npm pattern
					'spec/**', // mocha, rspec-like pattern
					'**/__tests__/**', // jest pattern
					'**/__mocks__/**', // jest pattern
					'test.{ts,tsx}', // repos with a single test file
					'test-*.{ts,tsx}', // repos with multiple top-level test files
					'**/*{.,_}{test,spec}.{ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
				],
				optionalDependencies: false,
			},
		],

		// TypeScript provides the same checks as part of standard type checking
		// https://github.com/typescript-eslint/typescript-eslint/blob/13583e65f5973da2a7ae8384493c5e00014db51b/docs/linting/TROUBLESHOOTING.md#eslint-plugin-import
		'import-x/no-named-as-default-member': 'error',

		// Module systems:

		// Use eslint-import-resolver-typescript instead
		'import-x/no-unresolved': 'off',
	},
};

export default rules;
