import { type Linter } from 'eslint';
import { describe, expect, test } from 'vitest';

import { extractConfigRules, sortRules } from '../utils';

describe('utils', (): void => {
	test('extractConfigRules to extract rules from eslint config', (): void => {
		const CONFIG_1: Linter.Config = {
			rules: {
				'rule-1': 'error',
				'rule-2': 'error',
				'rule-3': 'error',
			},
		};

		const CONFIG_2: Linter.Config = {
			rules: {
				'rule-4': 'error',
				'rule-5': 'error',
				'rule-6': 'error',
			},
		};

		const CONFIG_3: Linter.Config = {};

		const EXTRACTED_RULES: NonNullable<Linter.Config['rules']> = {
			...CONFIG_1.rules,
			...CONFIG_2.rules,
			...CONFIG_3.rules,
		};

		expect(extractConfigRules([CONFIG_1, CONFIG_2, CONFIG_3])).toStrictEqual(
			EXTRACTED_RULES,
		);
	});

	test('sortRules to sort rule names alphabetically', (): void => {
		/* eslint-disable perfectionist/sort-objects */
		const UNSORTED_RULES: NonNullable<Linter.Config['rules']> = {
			'rule-3': 'error',
			'rule-2': 'error',
			'rule-1': 'error',
		};
		/* eslint-enable perfectionist/sort-objects */

		const SORTED_RULES: NonNullable<Linter.Config['rules']> = {
			'rule-1': 'error',
			'rule-2': 'error',
			'rule-3': 'error',
		};

		expect(sortRules(UNSORTED_RULES)).toStrictEqual(SORTED_RULES);
	});
});
