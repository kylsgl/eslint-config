import { type Linter } from 'eslint';

export interface RuleConfig {
	readonly files?: Array<string | string[]>;
	readonly ignores?: string[];
	readonly languageOptions?: Linter.LanguageOptions;
	readonly name?: string;
	readonly rules: Partial<Linter.RulesRecord>;
}

export interface Rules {
	readonly base: readonly RuleConfig[];
	readonly prettier: readonly RuleConfig[];
	readonly react: readonly RuleConfig[];
	readonly reactTypeScript: readonly RuleConfig[];
	readonly typeScript: readonly RuleConfig[];
	readonly typeScriptTypeChecked: readonly RuleConfig[];
}
