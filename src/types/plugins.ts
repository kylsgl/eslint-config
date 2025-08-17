import { type ESLint } from 'eslint';

export interface InternalPluginConfig {
	readonly files: Array<string | string[]>;
	readonly plugins: Record<string, ESLint.Plugin>;
}

export interface InternalPlugins {
	readonly base: readonly InternalPluginConfig[];
	readonly react: readonly InternalPluginConfig[];
	readonly typeScript: readonly InternalPluginConfig[];
}

export interface Plugins {
	readonly '@stylistic': ESLint.Plugin;
	readonly '@typescript-eslint': ESLint.Plugin;
	readonly 'import-x': ESLint.Plugin;
	readonly 'jsx-a11y': ESLint.Plugin;
	readonly kylsgl: ESLint.Plugin;
	readonly n: ESLint.Plugin;
	readonly 'package-json': ESLint.Plugin;
	readonly perfectionist: ESLint.Plugin;
	readonly promise: ESLint.Plugin;
	readonly react: ESLint.Plugin;
	readonly 'react-hooks': ESLint.Plugin;
	readonly 'react-refresh': ESLint.Plugin;
	readonly regexp: ESLint.Plugin;
	readonly 'simple-import-sort': ESLint.Plugin;
	readonly sonarjs: ESLint.Plugin;
	readonly 'testing-library': ESLint.Plugin;
	readonly tsdoc: ESLint.Plugin;
	readonly unicorn: ESLint.Plugin;
	readonly vitest: ESLint.Plugin;
}
