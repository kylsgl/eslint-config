import { type RuleConfig } from '../../../types';
import reactConfig from './react';
import reactA11yConfig from './react-a11y';
import reactHooksConfig from './react-hooks';

export const airbnbReactConfig: readonly RuleConfig[] = [
	reactConfig,
	reactHooksConfig,
	reactA11yConfig,
];
