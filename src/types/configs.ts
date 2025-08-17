import { type Linter } from 'eslint';

export interface Configs {
	readonly base: ReadonlyArray<Readonly<Linter.Config>>;
	readonly prettier: ReadonlyArray<Readonly<Linter.Config>>;
	readonly react: ReadonlyArray<Readonly<Linter.Config>>;
	readonly reactTypeScript: ReadonlyArray<Readonly<Linter.Config>>;
	readonly typeScript: ReadonlyArray<Readonly<Linter.Config>>;
	readonly typeScriptTypeChecked: ReadonlyArray<Readonly<Linter.Config>>;
}
