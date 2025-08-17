import eslintConfigPrettier from 'eslint-config-prettier';

import { FilesGlob } from '../constants';
import { type RuleConfig } from '../types';

const baseConfig: RuleConfig = {
	files: FilesGlob.JS,
	name: 'prettier/base',
	rules: {
		...eslintConfigPrettier.rules,
		'@stylistic/quotes': undefined,
		curly: undefined,
	},
};

export default [baseConfig];
