import rules from './generated-rules';
import ignores from './ignores';
import parsers from './parsers';
import { internalPlugins } from './plugins';
import settings from './settings';
import { type Configs } from './types';

const configs: Configs = {
	base: [
		...internalPlugins.base,
		...parsers.base,
		...settings.base,
		...rules.base,
		ignores,
	],
	prettier: rules.prettier,
	react: [
		...internalPlugins.react,
		...parsers.react,
		...settings.react,
		...rules.react,
	],
	reactTypeScript: rules.reactTypeScript,
	typeScript: [
		...internalPlugins.typeScript,
		...parsers.typeScript,
		...settings.typeScript,
		...rules.typeScript,
	],
	typeScriptTypeChecked: [
		...internalPlugins.typeScript,
		...parsers.typeScript,
		...settings.typeScript,
		...rules.typeScriptTypeChecked,
	],
};

export default configs;
