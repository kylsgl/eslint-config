import { type Rules } from '../types';
import baseRules from './base';
import importRules from './import';
import importTypescriptRules from './import-typescript';
import prettierRules from './prettier';
import reactRules from './react';
import reactTypeScriptRules from './react-typescript';
import testsRules from './tests';
import { typeScriptRules, typeScriptTypeCheckedRules } from './typescript';

export const rules: Rules = {
	base: [...baseRules, ...importRules, ...testsRules],
	prettier: prettierRules,
	react: reactRules,
	reactTypeScript: reactTypeScriptRules,
	typeScript: [...typeScriptRules, ...importTypescriptRules],
	typeScriptTypeChecked: [
		...typeScriptTypeCheckedRules,
		...importTypescriptRules,
	],
};
