import { type Linter } from 'eslint';

export interface ParserConfig {
	readonly files: Array<string | string[]>;
	readonly languageOptions: {
		readonly parser?: Linter.Parser;
		readonly parserOptions?: Linter.ParserOptions;
		readonly sourceType?: Linter.SourceType;
	};
}

export interface Parsers {
	readonly base: readonly ParserConfig[];
	readonly react: readonly ParserConfig[];
	readonly typeScript: readonly ParserConfig[];
}
