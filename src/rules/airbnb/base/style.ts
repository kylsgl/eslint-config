import { FilesGlob } from '../../../constants';
import { type RuleConfig } from '../../../types';

const rules: RuleConfig = {
	files: FilesGlob.JS,
	name: 'airbnb/style',
	rules: {
		// require camel case names
		camelcase: ['error', { ignoreDestructuring: false, properties: 'never' }],

		// enforce or disallow capitalization of the first letter of a comment
		// https://eslint.org/docs/rules/capitalized-comments
		'capitalized-comments': [
			'off',
			'never',
			{
				block: {
					ignoreConsecutiveComments: true,
					ignoreInlineComments: true,
					ignorePattern: '.*',
				},
				line: {
					ignoreConsecutiveComments: true,
					ignoreInlineComments: true,
					ignorePattern: '.*',
				},
			},
		],

		// enforces consistent naming when capturing the current execution context
		'consistent-this': 'off',

		// require or disallow newlines around directives
		// https://eslint.org/docs/rules/lines-around-directive
		// Replaced by padding-line-between-statements
		// 'lines-around-directive': [
		// 	'error',
		// 	{
		// 		after: 'always',
		// 		before: 'always',
		// 	},
		// ],

		// requires function names to match the name of the variable or property to which they are
		// assigned
		// https://eslint.org/docs/rules/func-name-matching
		'func-name-matching': [
			'off',
			'always',
			{
				considerPropertyDescriptor: true,
				includeCommonJSModuleExports: false,
			},
		],

		// require function expressions to have a name
		// https://eslint.org/docs/rules/func-names
		'func-names': 'warn',

		// enforces use of function declarations or expressions
		// https://eslint.org/docs/rules/func-style
		// TODO: enable
		'func-style': ['off', 'expression'],

		// disallow specified identifiers
		// https://eslint.org/docs/rules/id-denylist
		'id-denylist': 'off',

		// this option enforces minimum and maximum identifier lengths
		// (variable names, property names etc.)
		'id-length': 'off',

		// require identifiers to match the provided regular expression
		'id-match': 'off',

		// Require or disallow logical assignment logical operator shorthand
		// https://eslint.org/docs/latest/rules/logical-assignment-operators
		// TODO, semver-major: enable
		'logical-assignment-operators': [
			'off',
			'always',
			{
				enforceForIfStatements: true,
			},
		],

		// specify the maximum depth that blocks can be nested
		'max-depth': ['off', 4],

		// specify the max number of lines in a file
		// https://eslint.org/docs/rules/max-lines
		'max-lines': [
			'off',
			{
				max: 300,
				skipBlankLines: true,
				skipComments: true,
			},
		],

		// enforce a maximum function length
		// https://eslint.org/docs/rules/max-lines-per-function
		'max-lines-per-function': [
			'off',
			{
				IIFEs: true,
				max: 50,
				skipBlankLines: true,
				skipComments: true,
			},
		],

		// allow/disallow an empty newline after var statement
		// Replaced by padding-line-between-statements
		// 'newline-after-var': 'off',

		// https://eslint.org/docs/rules/newline-before-return
		// Replaced by padding-line-between-statements
		// 'newline-before-return': 'off',

		// specify the maximum depth callbacks can be nested
		'max-nested-callbacks': 'off',

		// limits the number of parameters that can be used in the function declaration.
		'max-params': ['off', 3],

		// specify the maximum number of statement allowed in a function
		'max-statements': ['off', 10],

		// require a capital letter for constructors
		'new-cap': [
			'error',
			{
				capIsNew: false,
				capIsNewExceptions: [
					'Immutable.List',
					'Immutable.Map',
					'Immutable.Set',
				],
				newIsCap: true,
				newIsCapExceptions: [],
			},
		],

		// disallow use of the Array constructor
		'no-array-constructor': 'error',

		// disallow use of bitwise operators
		// https://eslint.org/docs/rules/no-bitwise
		'no-bitwise': 'error',

		// disallow use of the continue statement
		// https://eslint.org/docs/rules/no-continue
		'no-continue': 'error',

		// disallow comments inline after code
		'no-inline-comments': 'off',

		// disallow if as the only statement in an else block
		// https://eslint.org/docs/rules/no-lonely-if
		'no-lonely-if': 'error',

		// disallow use of chained assignment expressions
		// https://eslint.org/docs/rules/no-multi-assign
		'no-multi-assign': ['error'],

		// disallow negated conditions
		// https://eslint.org/docs/rules/no-negated-condition
		'no-negated-condition': 'off',

		// do not require jsdoc
		// https://eslint.org/docs/rules/require-jsdoc
		// This rule was deprecated without a replacement rule
		// 'require-jsdoc': 'off',

		// disallow nested ternary expressions
		'no-nested-ternary': 'error',

		// disallow use of the Object constructor
		// Replaced by no-object-constructor
		// 'no-new-object': 'error',

		// disallow use of unary operators, ++ and --
		// https://eslint.org/docs/rules/no-plusplus
		'no-plusplus': 'error',

		// disallow space between function identifier and application
		// deprecated in favor of func-call-spacing
		// 'no-spaced-func': 'off',

		// disallow certain syntax forms
		// https://eslint.org/docs/rules/no-restricted-syntax
		'no-restricted-syntax': [
			'error',
			{
				message:
					'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
				selector: 'ForInStatement',
			},
			{
				message:
					'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
				selector: 'ForOfStatement',
			},
			{
				message:
					'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
				selector: 'LabeledStatement',
			},
			{
				message:
					'`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
				selector: 'WithStatement',
			},
		],

		// disallow the use of ternary operators
		'no-ternary': 'off',

		// disallow dangling underscores in identifiers
		// https://eslint.org/docs/rules/no-underscore-dangle
		'no-underscore-dangle': [
			'error',
			{
				allow: [],
				allowAfterSuper: false,
				allowAfterThis: false,
				enforceInMethodNames: true,
			},
		],

		// disallow the use of Boolean literals in conditional expressions
		// also, prefer `a || b` over `a ? a : b`
		// https://eslint.org/docs/rules/no-unneeded-ternary
		'no-unneeded-ternary': ['error', { defaultAssignment: false }],

		// allow just one var statement per function
		'one-var': ['error', 'never'],

		// require assignment operator shorthand where possible or prohibit it entirely
		// https://eslint.org/docs/rules/operator-assignment
		'operator-assignment': ['error', 'always'],

		// Disallow the use of Math.pow in favor of the ** operator
		// https://eslint.org/docs/rules/prefer-exponentiation-operator
		'prefer-exponentiation-operator': 'error',

		// Prefer use of an object spread over Object.assign
		// https://eslint.org/docs/rules/prefer-object-spread
		'prefer-object-spread': 'error',

		// requires object keys to be sorted
		'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

		// sort variables within the same declaration block
		'sort-vars': 'off',

		// require or disallow the Unicode Byte Order Mark
		// https://eslint.org/docs/rules/unicode-bom
		'unicode-bom': ['error', 'never'],
	},
};
export default rules;
