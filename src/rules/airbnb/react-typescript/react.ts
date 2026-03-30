import { FilesGlob } from '../../../constants';
import { type RuleConfig } from '../../../types';

const rules: RuleConfig = {
	files: FilesGlob.JSX,
	name: 'airbnb/react-typescript',
	rules: {
		'react-dom/no-string-style-prop': 'off',
		'react-dom/no-unknown-property': 'off',
		'react-x/no-leaked-conditional-rendering': 'error',
		'react-x/no-unused-props': 'error',
	},
};

export default rules;
