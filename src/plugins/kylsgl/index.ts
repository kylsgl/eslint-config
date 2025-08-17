import { type ESLint } from 'eslint';

import { noTopLevelFunctionExpression } from './rules';
import noDefaultParams from './rules/no-default-params';
import noUnsafeDivision from './rules/no-unsafe-division';

const kylsgl: ESLint.Plugin = {
	rules: {
		'no-default-params': noDefaultParams,
		'no-top-level-function-expression': noTopLevelFunctionExpression,
		'no-unsafe-division': noUnsafeDivision,
	},
};

export default kylsgl;
