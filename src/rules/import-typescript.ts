import { FilesGlob } from '../constants';
import { type RuleConfig } from '../types';

const baseConfig: RuleConfig = {
	files: FilesGlob.TS,
	name: 'import/base-typescript',
	rules: {
		'import-x/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'**/{.storybook,__mocks__,__tests__,configs,electron,scripts,spec,test,tests}/**',
					'**/*.{config,spec,stories,test}.{ts,tsx,cts,mts}',
				],
				optionalDependencies: false,
			},
		],
	},
};

const preferDefaultExportExclusionConfig: RuleConfig = {
	files: ['**/*.d.ts'],
	name: 'import/prefer-default-export-exclusion-typescript',
	rules: {
		'import-x/prefer-default-export': 'off',
	},
};

export default [baseConfig, preferDefaultExportExclusionConfig];
