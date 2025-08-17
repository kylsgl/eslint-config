import { defineConfig } from 'rollup';
import { dts } from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import { minify } from 'terser';

import packageJSON from './package.json' with { type: 'json' };

function terserPlugin() {
	return {
		name: 'terser',
		async renderChunk(code) {
			const module = true;

			const toplevel = true;

			const result = await minify(code, {
				compress: {
					passes: 2,
					reduce_funcs: false,
					unsafe: true,
					unsafe_arrows: true,
					unsafe_methods: true,
					unsafe_proto: true,
				},
				ecma: 2_020,
				mangle: {
					module,
					toplevel,
				},
				module,
				toplevel,
			});

			return {
				code: result.code ?? code,
				map: result.map,
			};
		},
	};
}

export default defineConfig(() => {
	const input = './src/index.ts';

	const output = {
		exports: 'named',
		strict: true,
	};

	const external = [
		...Object.keys(packageJSON.dependencies),
		...Object.keys(packageJSON.devDependencies),
	];

	const plugins = [
		esbuild({
			minify: false,
			platform: 'node',
			supported: {
				'node-colon-prefix-import': true,
			},
			target: ['es2024', 'node22'],
		}),
		terserPlugin(),
	];

	return [
		{
			input,
			output: {
				file: './dist/index.d.ts',
				format: 'esm',
			},
			plugins: [dts()],
		},
		{
			external,
			input,
			output: {
				...output,
				file: './dist/index.mjs',
				format: 'esm',
			},
			plugins,
		},
		// {
		// 	external,
		// 	input,
		// 	output: {
		// 		...output,
		// 		file: './dist/index.cjs',
		// 		format: 'commonjs',
		// 	},
		// 	plugins,
		// },
	];
});
