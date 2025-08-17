import { FilesGlob } from '../constants';
import { type RuleConfig } from '../types';
import { airbnbReactTypescriptConfig } from './airbnb';

const baseConfig: RuleConfig = {
	files: FilesGlob.JSX,
	name: 'react/base-typescript',
	rules: {},
};

export default [baseConfig, ...airbnbReactTypescriptConfig];
