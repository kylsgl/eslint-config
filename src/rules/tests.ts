import vitest from '@vitest/eslint-plugin';
import globals from 'globals';

import { FilesGlob } from '../constants';
import { type RuleConfig } from '../types';

const baseConfig: RuleConfig = {
	files: FilesGlob.JSTests,
	languageOptions: {
		globals: globals.vitest,
	},
	name: 'tests/base',
	rules: {
		...vitest.configs.recommended.rules,
	},
};

const testsDirectoryConfig: RuleConfig = {
	files: ['**/{__tests__,test,tests}/**'],
	name: 'tests/directory',
	rules: {
		'class-methods-use-this': 'off',
	},
};

export default [baseConfig, testsDirectoryConfig];
