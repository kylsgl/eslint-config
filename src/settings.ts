import * as typeScriptImportResolver from 'eslint-import-resolver-typescript';

import { FilesGlob } from './constants';
import { type Settings } from './types';

const settings: Settings = {
	base: [
		{
			files: FilesGlob.TS,
			settings: {
				'import-x/resolver': {
					node: {
						extensions: ['.json', 'js', 'jsx', 'cjs', 'mjs'],
					},
				},
			},
		},
	],
	react: [
		{
			files: FilesGlob.JSX,
			settings: {
				propWrapperFunctions: [
					'exact', // https://www.npmjs.com/package/prop-types-exact
					'forbidExtraProps', // https://www.npmjs.com/package/airbnb-prop-types
					'Object.freeze', // https://tc39.github.io/ecma262/#sec-object.freeze
				],
				react: {
					pragma: 'React',
					version: 'detect',
				},
			},
		},
	],
	typeScript: [
		{
			files: FilesGlob.TS,
			settings: {
				'import-x/resolver': {
					name: 'typeScriptImportResolver',
					node: {
						extensions: ['.json', 'ts', 'tsx', 'cts', 'mts'],
					},
					resolver: typeScriptImportResolver,
				},
			},
		},
	],
};

export default settings;
