import { type RuleTester } from 'eslint';

import noUnsafeDivision from '../no-unsafe-division';
import ruleTester from './rule-tester';

const errors: RuleTester.TestCaseError[] = [{ messageId: 'noUnsafeDivision' }];

ruleTester.run('no-unsafe-division', noUnsafeDivision, {
	invalid: [
		{
			code: '1 / 0',
			errors,
		},
		{
			code: '1n / 0n',
			errors,
		},
		{
			code: '1 / (1 * 0)',
			errors,
		},
		{
			code: '1n / (1n * 0n)',
			errors,
		},
		{
			code: 'const divisor = 0; let result = 1; result /= divisor',
			errors,
		},
		{
			code: 'const divisor = 0n; let result = 1n; result /= divisor',
			errors,
		},
		{
			code: 'const divisor = 0; let result = 1; result %= divisor',
			errors,
		},
		{
			code: 'const divisor = 0n; let result = 1n; result %= divisor',
			errors,
		},
		{
			code: 'const divisor = 0; const result = divisor === 0 ? 1 / divisor : 0',
			errors,
		},
		{
			code: 'const divisors = { zero: 0, }; if (divisors.zero === 0) { const result = 1 / divisors.zero; }',
			errors,
		},
		{
			code: 'const divisor = 0; if (divisor === 0 || (divisor >= 0 && divisor <= 0)) { const result = 5 / divisor; }',
			errors,
		},
		{
			code: 'const DivisorObj = { zero: 0, }; const result = 1 / DivisorObj.zero',
			errors,
			options: [{ ignorePascalCase: false }],
		},
		{
			code: 'const DIVISOR_OBJ = { zero: 0, }; const result = 1 / DIVISOR_OBJ.zero',
			errors,
			options: [{ ignoreScreamingSnakeCase: false }],
		},
		{
			code: 'const DivisorOne = 0; const result = 1 / DivisorOne',
			errors,
			options: [{ ignorePascalCase: false }],
		},
		{
			code: 'const DIVISOR_ONE = 0; const result = 1 / DIVISOR_ONE',
			errors,
			options: [{ ignoreScreamingSnakeCase: false }],
		},
		{
			code: 'function test(divisor) { if (divisor !== 0) { return 0; } return 1 / divisor; }',
			errors,
		},
		{
			code: 'function test(divisor) { if (0 !== divisor) { return 0; } return 1 / divisor; }',
			errors,
		},
	],
	valid: [
		'1 / 1',
		'1n / 1n',
		'1 / (1 * 1)',
		'1n / (1n * 1n)',
		'const divisor = 1; let result = 1; result /= divisor',
		'const divisor = 1n; let result = 1n; result /= divisor',
		'const divisor = 1; let result = 1; result %= divisor',
		'const divisor = 1n; let result = 1n; result %= divisor',
		'const divisor = 1; const result = divisor === 0 ? 1 / divisor : 0',
		{
			code: 'const DivisorObj = { zero: 0, }; const result = 1 / DivisorObj.zero',
			options: [{ ignorePascalCase: true }],
		},
		{
			code: 'const DIVISOR_OBJ = { zero: 0, }; const result = 1 / DIVISOR_OBJ.zero',
			options: [{ ignoreScreamingSnakeCase: true }],
		},
		{
			code: 'const DivisorOne = 0; const result = 1 / DivisorOne',
			options: [{ ignorePascalCase: true }],
		},
		{
			code: 'const DIVISOR_ONE = 0; const result = 1 / DIVISOR_ONE',
			options: [{ ignoreScreamingSnakeCase: true }],
		},
		'const test = (divisor) => (divisor === 0 ? 0 : 1 / divisor)',
		'function test(divisor) { if (divisor === 0) { return 0; } return 1 / divisor; }',
		'function test(divisor) { if (0 === divisor) { return 0; } return 1 / divisor; }',
		'function test(divisor) { if (divisor >= 0 || divisor <= 0) { return 0; } return 1 / divisor; }',
		'function test(divisor) { if (divisor >= 0 && divisor <= 0) { return 0; } return 1 / divisor; }',
	],
});
