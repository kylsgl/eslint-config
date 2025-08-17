import { FilesGlob } from '../../../constants';
import { type RuleConfig } from '../../../types';

const rules: RuleConfig = {
	files: FilesGlob.JS,
	name: 'airbnb/strict',
	rules: {
		// babel inserts `'use strict';` for us
		strict: ['error', 'never'],
	},
};

export default rules;
