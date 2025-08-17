import { type RuleTester } from 'eslint';

import noTopLevelFunctionExpression from '../no-top-level-function-expression';
import ruleTester from './rule-tester';

const errors: RuleTester.TestCaseError[] = [
	{ messageId: 'noTopLevelFunctionExpression' },
];

ruleTester.run(
	'no-top-level-function-expression',
	noTopLevelFunctionExpression,
	{
		invalid: [
			{
				code: 'const test = () => {}',
				errors,
			},
			{
				code: 'const test = function() {}',
				errors,
			},
			{
				code: 'const test = function test() {}',
				errors,
			},
		],
		valid: [
			'const test = true',
			'function test(){}',
			'function test(){ const testInner = () => {}; }',
		],
	},
);
