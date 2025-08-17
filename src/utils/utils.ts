import { type Linter } from 'eslint';

export function extractConfigRules(
	configs: Linter.Config[],
): NonNullable<Linter.Config['rules']> {
	return configs.reduce(
		(
			accumulator: NonNullable<Linter.Config['rules']>,
			currentValue: Linter.Config,
		): NonNullable<Linter.Config['rules']> => {
			const { rules } = currentValue;

			if (rules !== undefined) {
				Object.entries(rules).forEach(([key, value]): void => {
					accumulator[key] = value;
				});
			}

			return accumulator;
		},
		{},
	);
}

export function sortRules(
	rules: NonNullable<Linter.Config['rules']>,
): NonNullable<Linter.Config['rules']> {
	return Object.fromEntries(
		Object.entries(rules).sort(([a], [b]): number => a.localeCompare(b)),
	);
}
