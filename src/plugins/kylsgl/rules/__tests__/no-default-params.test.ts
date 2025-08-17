import { type RuleTester } from 'eslint';

import noDefaultParams from '../no-default-params';
import ruleTester from './rule-tester';

const errors: RuleTester.TestCaseError[] = [{ messageId: 'noDefaultParams' }];

ruleTester.run('no-default-params', noDefaultParams, {
	invalid: [
		{
			code: 'function test(param = 1){}',
			errors,
		},
		{
			code: 'function test(param1 = 1, param2){}',
			errors,
		},
		{
			code: 'function test(param1, param2 = 1){}',
			errors,
		},
	],
	valid: ['function test(param){}', 'function test(param1, param2){}'],
});
