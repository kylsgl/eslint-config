import { type RuleConfig } from '../../../types';
import bestPractices from './best-practices';
import errors from './errors';
import es6 from './es6';
import style from './style';

export const airbnbStylisticConfig: readonly RuleConfig[] = [
	bestPractices,
	es6,
	errors,
	style,
];
