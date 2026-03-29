import { defineConfig, type RolldownOptions } from 'rolldown';
import { dts } from 'rolldown-plugin-dts';

import packageJSON from './package.json' with { type: 'json' };

export default defineConfig((): RolldownOptions[] => {
	const commonOptions: RolldownOptions = {
		external: [
			/^node:/,
			...Object.keys({
				...packageJSON.dependencies,
				...packageJSON.devDependencies,
			}),
		],
		input: './src/index.ts',
		optimization: {
			inlineConst: false,
		},
		platform: 'node',
		treeshake: {
			moduleSideEffects: false,
			propertyReadSideEffects: false,
			unknownGlobalSideEffects: false,
		},
	};

	const commonOutputOptions: RolldownOptions['output'] = {
		dir: './dist',
		format: 'esm',
		minify: {
			codegen: {
				removeWhitespace: false,
			},
			compress: {
				dropConsole: true,
				dropDebugger: true,
			},
			mangle: false,
		},
		topLevelVar: true,
	};

	return [
		{
			...commonOptions,
			output: {
				...commonOutputOptions,
				entryFileNames: 'index.mjs',
				exports: 'named',
			},
		},
		{
			...commonOptions,
			output: {
				...commonOutputOptions,
			},
			plugins: [
				dts({
					emitDtsOnly: true,
				}),
			],
		},
	];
});
