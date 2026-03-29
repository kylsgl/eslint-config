import { defineConfig } from 'rolldown';

import packageJSON from '../../package.json' with { type: 'json' };

export default defineConfig({
	external: [
		/^node:/,
		...Object.keys({
			...packageJSON.dependencies,
			...packageJSON.devDependencies,
		}),
	],
	input: './scripts/eslint-config/index.ts',
	optimization: {
		inlineConst: false,
	},
	output: {
		file: './eslint.config.mjs',
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
	},
	platform: 'node',
	treeshake: {
		moduleSideEffects: false,
		propertyReadSideEffects: false,
		unknownGlobalSideEffects: false,
	},
});
