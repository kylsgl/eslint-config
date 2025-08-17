import stylistic from '@stylistic/eslint-plugin';
import vitest from '@vitest/eslint-plugin';
import { type ESLint } from 'eslint';
import { importX } from 'eslint-plugin-import-x';
// @ts-expect-error - no types
import jsxA11y from 'eslint-plugin-jsx-a11y';
import n from 'eslint-plugin-n';
import packageJSON from 'eslint-plugin-package-json';
import perfectionist from 'eslint-plugin-perfectionist';
// @ts-expect-error - no types
import promise from 'eslint-plugin-promise';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import * as regexp from 'eslint-plugin-regexp';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sonarjs from 'eslint-plugin-sonarjs';
import testingLibrary from 'eslint-plugin-testing-library';
import tsdoc from 'eslint-plugin-tsdoc';
import unicorn from 'eslint-plugin-unicorn';
import tsEslint from 'typescript-eslint';

import { FilesGlob } from '../constants';
import { type InternalPlugins, type Plugins } from '../types';
import kylsgl from './kylsgl';

export const plugins: Plugins = {
	'@stylistic': stylistic,
	'@typescript-eslint': tsEslint.plugin as ESLint.Plugin,
	'import-x': importX as unknown as ESLint.Plugin,
	'jsx-a11y': jsxA11y as ESLint.Plugin,
	kylsgl,
	n,
	'package-json': packageJSON as ESLint.Plugin,
	perfectionist,
	promise: promise as ESLint.Plugin,
	react,
	'react-hooks': reactHooks,
	'react-refresh': reactRefresh,
	regexp,
	'simple-import-sort': simpleImportSort,
	sonarjs,
	'testing-library': testingLibrary,
	tsdoc,
	unicorn,
	vitest: vitest as unknown as ESLint.Plugin,
};

export const internalPlugins: InternalPlugins = {
	base: [
		{
			files: FilesGlob.JS,
			plugins: {
				'@stylistic': plugins['@stylistic'],
				'import-x': plugins['import-x'],
				kylsgl: plugins.kylsgl,
				n: plugins.n,
				perfectionist: plugins.perfectionist,
				promise: plugins.promise,
				regexp: plugins.regexp,
				'simple-import-sort': plugins['simple-import-sort'],
				sonarjs: plugins.sonarjs,
				unicorn: plugins.unicorn,
			},
		},
		{
			files: FilesGlob.PackageJSON,
			plugins: {
				'package-json': plugins['package-json'],
			},
		},
		{
			files: FilesGlob.JSTests,
			plugins: {
				vitest: plugins.vitest,
			},
		},
	],
	react: [
		{
			files: FilesGlob.JSX,
			plugins: {
				'jsx-a11y': plugins['jsx-a11y'],
				react: plugins.react,
				'react-hooks': plugins['react-hooks'],
				'react-refresh': plugins['react-refresh'],
			},
		},
		{
			files: FilesGlob.JSXTests,
			plugins: {
				'testing-library': plugins['testing-library'],
			},
		},
	],
	typeScript: [
		{
			files: FilesGlob.TS,
			plugins: {
				'@typescript-eslint': plugins['@typescript-eslint'],
				tsdoc: plugins.tsdoc,
			},
		},
	],
};
