import { defineConfig } from 'rollup';
import esbuild from 'rollup-plugin-esbuild';

import packageJSON from '../../package.json' with { type: 'json' };

export default defineConfig(() => ({
	external: [
		...Object.keys(packageJSON.dependencies),
		...Object.keys(packageJSON.devDependencies),
	],
	input: './scripts/eslint-config/index.ts',
	output: {
		file: './eslint.config.mjs',
		format: 'esm',
		strict: true,
	},
	plugins: esbuild({
		minify: false,
		platform: 'node',
		supported: {
			'node-colon-prefix-import': true,
		},
		target: ['es2024', 'node22'],
	}),
}));
