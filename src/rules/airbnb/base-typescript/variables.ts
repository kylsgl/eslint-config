import { FilesGlob } from '../../../constants';
import { type RuleConfig } from '../../../types';
import baseVariablesConfig from '../base/variables';

const rules: RuleConfig = {
	files: FilesGlob.TS,
	name: 'airbnb/typescript/variables',
	rules: {
		'@typescript-eslint/no-shadow': baseVariablesConfig.rules['no-shadow'],
		'@typescript-eslint/no-unused-vars':
			baseVariablesConfig.rules['no-unused-vars'],
		'@typescript-eslint/no-use-before-define':
			baseVariablesConfig.rules['no-use-before-define'],
		'no-shadow': 'off',
		'no-undef': 'off',
		'no-unused-vars': 'off',
		'no-use-before-define': 'off',
	},
};

export default rules;
