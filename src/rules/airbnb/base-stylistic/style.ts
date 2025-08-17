import { FilesGlob } from '../../../constants';
import { type RuleConfig } from '../../../types';

const rules: RuleConfig = {
	files: FilesGlob.JS,
	name: 'airbnb/stylistic/style',
	rules: {
		// enforce line breaks after opening and before closing array brackets
		// https://eslint.style/rules/default/array-bracket-newline
		// TODO: enable? semver-major
		'@stylistic/array-bracket-newline': ['off', 'consistent'], // object option alternative: { multiline: true, minItems: 3 }

		// enforce spacing inside array brackets
		// https://eslint.style/rules/default/array-bracket-spacing
		'@stylistic/array-bracket-spacing': ['error', 'never'],

		// enforce line breaks between array elements
		// https://eslint.style/rules/default/array-element-newline
		// TODO: enable? semver-major
		'@stylistic/array-element-newline': [
			'off',
			{ minItems: 3, multiline: true },
		],

		// enforce spacing inside single-line blocks
		// https://eslint.style/rules/default/block-spacing
		'@stylistic/block-spacing': ['error', 'always'],

		// enforce one true brace style
		// https://eslint.style/rules/default/brace-style
		'@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],

		// require trailing commas in multiline object literals
		// https://eslint.style/rules/default/comma-dangle
		'@stylistic/comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				exports: 'always-multiline',
				functions: 'always-multiline',
				imports: 'always-multiline',
				objects: 'always-multiline',
			},
		],

		// enforce spacing before and after comma
		// https://eslint.style/rules/default/comma-spacing
		'@stylistic/comma-spacing': ['error', { after: true, before: false }],

		// enforce one true comma style
		// https://eslint.style/rules/default/comma-style
		'@stylistic/comma-style': [
			'error',
			'last',
			{
				exceptions: {
					ArrayExpression: false,
					ArrayPattern: false,
					ArrowFunctionExpression: false,
					CallExpression: false,
					FunctionDeclaration: false,
					FunctionExpression: false,
					ImportDeclaration: false,
					NewExpression: false,
					ObjectExpression: false,
					ObjectPattern: false,
					VariableDeclaration: false,
				},
			},
		],

		// disallow padding inside computed properties
		// https://eslint.style/rules/default/computed-property-spacing
		'@stylistic/computed-property-spacing': ['error', 'never'],

		// enforce newline at the end of file, with no multiple empty lines
		// https://eslint.style/rules/default/eol-last
		'@stylistic/eol-last': ['error', 'always'],

		// enforce spacing between functions and their invocations
		// https://eslint.style/rules/default/function-call-spacing
		'@stylistic/func-call-spacing': ['error', 'never'],

		// https://eslint.style/rules/default/function-call-argument-newline
		'@stylistic/function-call-argument-newline': ['error', 'consistent'],

		// require line breaks inside function parentheses if there are line breaks between parameters
		// https://eslint.style/rules/default/function-paren-newline
		'@stylistic/function-paren-newline': ['error', 'multiline-arguments'],

		// Enforce the location of arrow function bodies with implicit returns
		// https://eslint.style/rules/default/implicit-arrow-linebreak
		'@stylistic/implicit-arrow-linebreak': ['error', 'beside'],

		// this option sets a specific tab width for your code
		// https://eslint.style/rules/default/indent
		'@stylistic/indent': [
			'error',
			2,
			{
				ArrayExpression: 1,
				CallExpression: {
					arguments: 1,
				},
				flatTernaryExpressions: false,
				// MemberExpression: null,
				FunctionDeclaration: {
					body: 1,
					parameters: 1,
				},
				FunctionExpression: {
					body: 1,
					parameters: 1,
				},
				ignoreComments: false,
				// list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
				ignoredNodes: [
					'JSXAttribute',
					'JSXClosingElement',
					'JSXClosingFragment',
					'JSXElement',
					'JSXElement > *',
					'JSXEmptyExpression',
					'JSXExpressionContainer',
					'JSXFragment',
					'JSXIdentifier',
					'JSXMemberExpression',
					'JSXNamespacedName',
					'JSXOpeningElement',
					'JSXOpeningFragment',
					'JSXSpreadAttribute',
					'JSXSpreadChild',
					'JSXText',
				],
				ImportDeclaration: 1,
				ObjectExpression: 1,
				outerIIFEBody: 1,
				SwitchCase: 1,
				VariableDeclarator: 1,
			},
		],

		// specify whether double or single quotes should be used in JSX attributes
		// https://eslint.style/rules/default/jsx-quotes
		'@stylistic/jsx-quotes': ['off', 'prefer-double'],

		// enforces spacing between keys and values in object literal properties
		// https://eslint.style/rules/default/key-spacing
		'@stylistic/key-spacing': [
			'error',
			{ afterColon: true, beforeColon: false },
		],

		// require a space before & after certain keywords
		// https://eslint.style/rules/default/keyword-spacing
		'@stylistic/keyword-spacing': [
			'error',
			{
				after: true,
				before: true,
				overrides: {
					case: { after: true },
					return: { after: true },
					throw: { after: true },
				},
			},
		],

		// enforce position of line comments
		// https://eslint.style/rules/default/line-comment-position
		// TODO: enable?
		'@stylistic/line-comment-position': [
			'off',
			{
				applyDefaultPatterns: true,
				ignorePattern: '',
				position: 'above',
			},
		],

		// disallow mixed 'LF' and 'CRLF' as linebreaks
		// https://eslint.style/rules/default/linebreak-style
		'@stylistic/linebreak-style': ['error', 'unix'],

		// enforces empty lines around comments
		// https://eslint.style/rules/default/lines-around-comment
		'@stylistic/lines-around-comment': 'off',

		// require or disallow an empty line between class members
		// https://eslint.style/rules/default/lines-between-class-members
		'@stylistic/lines-between-class-members': [
			'error',
			'always',
			{ exceptAfterSingleLine: false },
		],

		// specify the maximum length of a line in your program
		// https://eslint.style/rules/default/max-len
		'@stylistic/max-len': [
			'error',
			100,
			2,
			{
				ignoreComments: false,
				ignoreRegExpLiterals: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreUrls: true,
			},
		],

		// restrict the number of statements per line
		// https://eslint.style/rules/default/max-statements-per-line
		'@stylistic/max-statements-per-line': ['off', { max: 1 }],

		// enforce a particular style for multiline comments
		// https://eslint.style/rules/default/multiline-comment-style
		'@stylistic/multiline-comment-style': ['off', 'starred-block'],

		// require multiline ternary
		// https://eslint.style/rules/default/multiline-ternary
		// TODO: enable?
		'@stylistic/multiline-ternary': ['off', 'never'],

		// disallow the omission of parentheses when invoking a constructor with no arguments
		// https://eslint.style/rules/default/new-parens
		'@stylistic/new-parens': 'error',

		// enforces new line after each method call in the chain to make it
		// more readable and easy to maintain
		// https://eslint.style/rules/default/newline-per-chained-call
		'@stylistic/newline-per-chained-call': [
			'error',
			{ ignoreChainWithDepth: 4 },
		],

		// disallow un-paren'd mixes of different operators
		// https://eslint.style/rules/default/no-mixed-operators
		'@stylistic/no-mixed-operators': [
			'error',
			{
				allowSamePrecedence: false,
				// the list of arithmetic groups disallows mixing `%` and `**`
				// with other arithmetic operators.
				groups: [
					['%', '*'],
					['%', '**'],
					['%', '+'],
					['%', '-'],
					['%', '/'],
					['&&', '||'],
					['&', '|', '<<', '>>', '>>>'],
					['/', '*'],
					['==', '!=', '===', '!=='],
				],
			},
		],

		// disallow mixed spaces and tabs for indentation
		// https://eslint.style/rules/default/no-mixed-spaces-and-tabs
		'@stylistic/no-mixed-spaces-and-tabs': 'error',

		// disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
		// https://eslint.style/rules/default/no-multiple-empty-lines
		'@stylistic/no-multiple-empty-lines': [
			'error',
			{ max: 1, maxBOF: 0, maxEOF: 0 },
		],

		// disallow tab characters entirely
		// https://eslint.style/rules/default/no-tabs
		'@stylistic/no-tabs': 'error',

		// disallow trailing whitespace at the end of lines
		// https://eslint.style/rules/default/no-trailing-spaces
		'@stylistic/no-trailing-spaces': [
			'error',
			{
				ignoreComments: false,
				skipBlankLines: false,
			},
		],

		// disallow whitespace before properties
		// https://eslint.style/rules/default/no-whitespace-before-property
		'@stylistic/no-whitespace-before-property': 'error',

		// enforce the location of single-line statements
		// https://eslint.style/rules/default/nonblock-statement-body-position
		'@stylistic/nonblock-statement-body-position': [
			'error',
			'beside',
			{ overrides: {} },
		],

		// enforce line breaks between braces
		// https://eslint.style/rules/default/object-curly-newline
		'@stylistic/object-curly-newline': [
			'error',
			{
				ExportDeclaration: {
					consistent: true,
					minProperties: 4,
					multiline: true,
				},
				ImportDeclaration: {
					consistent: true,
					minProperties: 4,
					multiline: true,
				},
				ObjectExpression: {
					consistent: true,
					minProperties: 4,
					multiline: true,
				},
				ObjectPattern: { consistent: true, minProperties: 4, multiline: true },
			},
		],

		// require padding inside curly braces
		// https://eslint.style/rules/default/object-curly-spacing
		'@stylistic/object-curly-spacing': ['error', 'always'],

		// enforce "same line" or "multiple line" on object properties.
		// https://eslint.style/rules/default/object-property-newline
		'@stylistic/object-property-newline': [
			'error',
			{
				allowAllPropertiesOnSameLine: true,
			},
		],

		// require a newline around variable declaration
		// https://eslint.style/rules/default/one-var-declaration-per-line
		'@stylistic/one-var-declaration-per-line': ['error', 'always'],

		// Requires operator at the beginning of the line in multiline statements
		// https://eslint.style/rules/default/operator-linebreak
		'@stylistic/operator-linebreak': [
			'error',
			'before',
			{ overrides: { '=': 'none' } },
		],

		// disallow padding within blocks
		// https://eslint.style/rules/default/padded-blocks
		'@stylistic/padded-blocks': [
			'error',
			{
				blocks: 'never',
				classes: 'never',
				switches: 'never',
			},
			{
				allowSingleLineBlocks: true,
			},
		],

		// Require or disallow padding lines between statements
		// https://eslint.style/rules/default/padding-line-between-statements
		'@stylistic/padding-line-between-statements': 'off',

		// require quotes around object literal property names
		// https://eslint.style/rules/default/quote-props
		'@stylistic/quote-props': [
			'error',
			'as-needed',
			{ keywords: false, numbers: false, unnecessary: true },
		],

		// specify whether double or single quotes should be used
		// https://eslint.style/rules/default/quotes
		'@stylistic/quotes': ['error', 'single', { avoidEscape: true }],

		// require or disallow use of semicolons instead of ASI
		// https://eslint.style/rules/default/semi
		'@stylistic/semi': ['error', 'always'],

		// enforce spacing before and after semicolons
		// https://eslint.style/rules/default/semi-spacing
		'@stylistic/semi-spacing': ['error', { after: true, before: false }],

		// Enforce location of semicolons
		// https://eslint.style/rules/default/semi-style
		'@stylistic/semi-style': ['error', 'last'],

		// require or disallow space before blocks
		// https://eslint.style/rules/default/space-before-blocks
		'@stylistic/space-before-blocks': 'error',

		// require or disallow space before function opening parenthesis
		// https://eslint.style/rules/default/space-before-function-paren
		'@stylistic/space-before-function-paren': [
			'error',
			{
				anonymous: 'always',
				asyncArrow: 'always',
				named: 'never',
			},
		],

		// require or disallow spaces inside parentheses
		// https://eslint.style/rules/default/space-in-parens
		'@stylistic/space-in-parens': ['error', 'never'],

		// require spaces around operators
		// https://eslint.style/rules/default/space-infix-ops
		'@stylistic/space-infix-ops': 'error',

		// Require or disallow spaces before/after unary operators
		// https://eslint.style/rules/default/space-unary-ops
		'@stylistic/space-unary-ops': [
			'error',
			{
				nonwords: false,
				overrides: {},
				words: true,
			},
		],

		// require or disallow a space immediately following the // or /* in a comment
		// https://eslint.style/rules/default/spaced-comment
		'@stylistic/spaced-comment': [
			'error',
			'always',
			{
				block: {
					balanced: true,
					exceptions: ['-', '+'],
					markers: [':', '::', '!', '='], // space here to support sprockets directives and flow comment types
				},
				line: {
					exceptions: ['-', '+'],
					markers: ['!', '/', '='], // space here to support sprockets directives, slash for TS /// comments
				},
			},
		],

		// Enforce spacing around colons of switch statements
		// https://eslint.style/rules/default/switch-colon-spacing
		'@stylistic/switch-colon-spacing': [
			'error',
			{ after: true, before: false },
		],

		// Require or disallow spacing between template tags and their literals
		// https://eslint.style/rules/default/template-tag-spacing
		'@stylistic/template-tag-spacing': ['error', 'never'],

		// require regex literals to be wrapped in parentheses
		// https://eslint.style/rules/default/wrap-regex
		'@stylistic/wrap-regex': 'off',
	},
};
export default rules;
