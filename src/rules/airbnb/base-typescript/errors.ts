import { FilesGlob } from '../../../constants';
import { type RuleConfig } from '../../../types';

const rules: RuleConfig = {
	files: FilesGlob.TS,
	name: 'airbnb/typescript/errors',
	rules: {
		'getter-return': 'off',
		'no-dupe-args': 'off',
		'no-dupe-keys': 'off',
		'no-func-assign': 'off',
		'no-import-assign': 'off',
		'no-new-native-nonconstructor': 'off',
		'no-obj-calls': 'off',
		'no-setter-return': 'off',
		'no-unreachable': 'off',
		'no-unsafe-negation': 'off',
		'valid-typeof': 'off',
	},
};

export default rules;
