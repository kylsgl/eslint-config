import { type RuleConfig } from '../../../types';
import bestPractices from './best-practices';
import errors from './errors';
import es6 from './es6';
import imports from './imports';
import node from './node';
import strict from './strict';
import style from './style';
import variables from './variables';

export const airbnbConfig: readonly RuleConfig[] = [
	bestPractices,
	es6,
	errors,
	imports,
	node,
	strict,
	style,
	variables,
];
