import { FilesGlob } from '../constants';
import { type RuleConfig } from '../types';

const baseConfig: RuleConfig = {
	files: FilesGlob.JS,
	name: 'import/base',
	rules: {
		'import-x/no-duplicates': ['error', { 'prefer-inline': true }],
		'import-x/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'**/{.storybook,__mocks__,__tests__,configs,electron,scripts,spec,test,tests}/**',
					'**/*.{config,spec,stories,test}.{js,jsx,cjs,mjs,cjs,mjs,ts,cts,mts,tsx,cts,mts}',
				],
				optionalDependencies: false,
			},
		],
		'import-x/order': 'off',
	},
};

const configsConfig: RuleConfig = {
	files: ['**/configs/**', '**/*.config.{js,cjs,mjs,ts,cts,mts}'],
	name: 'import/config',
	rules: {
		'import-x/extensions': 'off',
	},
};

const preferDefaultExportExclusionConfig: RuleConfig = {
	files: [
		'**/constants.{js,cjs,mjs,ts,cts,mts}',
		'**/enums.{js,cjs,mjs,ts,cts,mts}',
		'**/index.{js,cjs,mjs,ts,cts,mts}',
		'**/schemas.{js,cjs,mjs,ts,cts,mts}',
		'**/utils.{js,cjs,mjs,ts,cts,mts}',
	],
	name: 'import/prefer-default-export-exclusion',
	rules: {
		'import-x/prefer-default-export': 'off',
	},
};

const sortConfig: RuleConfig = {
	files: FilesGlob.JS,
	name: 'import/sort',
	rules: {
		'simple-import-sort/exports': 'error',
		'simple-import-sort/imports': 'error',
	},
};

export default [
	baseConfig,
	configsConfig,
	preferDefaultExportExclusionConfig,
	sortConfig,
];
