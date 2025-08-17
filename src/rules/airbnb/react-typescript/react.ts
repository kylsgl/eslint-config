import { FilesGlob } from '../../../constants';
import { type RuleConfig } from '../../../types';

const rules: RuleConfig = {
	files: FilesGlob.JSX,
	name: 'airbnb/react-typescript',
	rules: {
		'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
		'react/prop-types': 'off',
		'react/require-default-props': 'off',
	},
};

export default rules;
