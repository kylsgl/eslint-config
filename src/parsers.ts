import { type Linter } from 'eslint';
import packageJSON from 'eslint-plugin-package-json';
import { parser } from 'typescript-eslint';

import { FilesGlob } from './constants';
import { type Parsers } from './types';

const parsers: Parsers = {
	base: [
		{
			files: FilesGlob.PackageJSON,
			languageOptions: {
				parser: packageJSON.configs.recommended.languageOptions.parser,
			},
		},
	],
	react: [
		{
			files: FilesGlob.JSX,
			languageOptions: {
				parserOptions: {
					ecmaFeatures: {
						jsx: true,
					},
				},
			},
		},
	],
	typeScript: [
		{
			files: FilesGlob.TS,
			languageOptions: {
				parser: parser as Linter.Parser,
				parserOptions: {
					projectService: true,
					tsconfigRootDir: import.meta.dirname,
				},
				sourceType: 'module',
			},
		},
	],
};

export default parsers;
