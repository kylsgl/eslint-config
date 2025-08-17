import { FilesGlob } from '../../../constants';
import { type RuleConfig } from '../../../types';
import baseStyleConfig from '../base/style';

const rules: RuleConfig = {
	files: FilesGlob.TS,
	name: 'airbnb/typescript/style',
	rules: {
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
		],
		'@typescript-eslint/no-array-constructor':
			baseStyleConfig.rules['no-array-constructor'],
		camelcase: 'off',
		'no-array-constructor': 'off',
	},
};
export default rules;
