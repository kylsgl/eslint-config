import { FilesGlob } from '../../../constants';
import { type RuleConfig } from '../../../types';
import baseES6Config from '../base/es6';

const rules: RuleConfig = {
	files: FilesGlob.TS,
	name: 'airbnb/typescript/es6',
	rules: {
		'@typescript-eslint/no-useless-constructor':
			baseES6Config.rules['no-useless-constructor'],
		'@typescript-eslint/prefer-destructuring':
			baseES6Config.rules['prefer-destructuring'],
		// https://github.com/iamturns/eslint-config-airbnb-typescript/blob/master/lib/shared.js#L264
		'constructor-super': 'off',
		'no-const-assign': 'off',
		'no-dupe-class-members': 'off',
		'no-this-before-super': 'off',
		'no-useless-constructor': 'off',
		'prefer-destructuring': 'off',
	},
};

export default rules;
