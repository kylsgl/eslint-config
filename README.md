<h1 align="center">@kylsgl/eslint-config</h1>

<p align="center">
    ESLint rules for JavaScript, TypeScript, and React, based on the Airbnb JavaScript Style Guide.
</p>

<div align="center">
    <a href="https://www.npmjs.com/package/@kylsgl/eslint-config"><img alt="NPM Version" src="https://img.shields.io/npm/v/@kylsgl/eslint-config" /></a>
    <a href="https://github.com/kylsgl/eslint-config/actions/workflows/ci.yml"><img alt="CI Status" src="https://img.shields.io/github/actions/workflow/status/kylsgl/eslint-config/ci.yml?label=CI" /></a>
    <a href="https://codecov.io/github/kylsgl/eslint-config"><img alt="Codecov Coverage" src="https://codecov.io/github/kylsgl/eslint-config/branch/main/graph/badge.svg?token=EQZmsNHFvr" /></a>
    <a href="https://github.com/kylsgl/eslint-config/blob/main/LICENSE"><img alt="GitHub License" src="https://img.shields.io/github/license/kylsgl/eslint-config" /></a>
</div>

## Installation

```shell
npm install --save-dev @kylsgl/eslint-config
```

> [!IMPORTANT]
>
> **Requirements**
>
> - ESLint v9.25.x and above
> - Node.js v22.x and above
> - ESM

## Usage

```js
// eslint.config.mjs
import { configs } from '@kylsgl/eslint-config';

export default [
	...configs.base,
	...configs.typeScriptTypeChecked,
	...configs.prettier,
	{
		rules: {
			// Your custom rules
		},
	},
];
```

#### TypeScript

This config disables some rules in favor of TypeScript's own type checking.

```json
// tsconfig.json
{
	"compilerOptions": {
		"strict": true,
		"allowUnreachableCode": false,
		"noFallthroughCasesInSwitch": true,
		"noImplicitOverride": true,
		"noImplicitReturns": true,
		"noPropertyAccessFromIndexSignature": true,
		"noUncheckedSideEffectImports": true,
		"noUnusedLocals": true,
		"noUnusedParameters": true
	}
}
```

## Configs

| Name                    | Description                                        |
| ----------------------- | -------------------------------------------------- |
| `base`                  | Base rules                                         |
| `prettier`              | Compatibility rules for Prettier                   |
| `react`                 | Base rules for React                               |
| `reactTypeScript`       | TypeScript rules for React                         |
| `typeScript`            | Base rules for TypeScript                          |
| `typeScriptTypeChecked` | Base rules for TypeScript with type-checking rules |

## Rules

Rules for `eslint-plugin-kylsgl`

💼 Configurations enabled in.\
✅ Set in the `base` configuration.\
🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/use/command-line-interface#--fix).\
💡 Manually fixable by [editor suggestions](https://eslint.org/docs/latest/use/core-concepts#rule-suggestions).

| Name                                                                                                   | Description                                                                                           | 💼  | 🔧  | 💡  |
| ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- | --- | --- | --- |
| [kylsgl/no-default-params](src/plugins/kylsgl/docs/no-default-params.md)                               | Disallows assigning default values to function parameters parameters                                  |     |     |     |
| [kylsgl/no-top-level-function-expression](src/plugins/kylsgl/docs/no-top-level-function-expression.md) | Disallows defining function expressions at the top-level scope                                        | ✅  |     |     |
| [kylsgl/no-unsafe-division](src/plugins/kylsgl/docs/no-unsafe-division.md)                             | Disallow unsafe division operations by requiring divisor checks to prevent potential division by zero | ✅  |     |     |

## Plugins

This config uses the following plugins:

### Base

- `@stylistic/eslint-plugin`
- `@vitest/eslint-plugin`
- `eslint-plugin-import-x`
- `eslint-plugin-n`
- `eslint-plugin-package-json`
- `eslint-plugin-perfectionist`
- `eslint-plugin-promise`
- `eslint-plugin-regexp`
- `eslint-plugin-simple-import-sort`
- `eslint-plugin-sonarjs`
- `eslint-plugin-unicorn`

### TypeScript

- `eslint-plugin-tsdoc`
- `typescript-eslint`

### React

- `eslint-plugin-jsx-a11y`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`
- `eslint-plugin-testing-library`

## License

[MIT](LICENSE)
