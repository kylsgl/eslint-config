import { FilesGlob } from '../../../constants';
import { type RuleConfig } from '../../../types';

const rules: RuleConfig = {
	files: FilesGlob.JS,
	name: 'airbnb/variables',
	rules: {
		// enforce or disallow variable initializations at definition
		'init-declarations': 'off',

		// disallow the catch clause parameter name being the same as a variable in the outer scope
		// Replaced by no-shadow
		// 'no-catch-shadow': 'off',

		// disallow deletion of variables
		'no-delete-var': 'error',

		// disallow labels that share a name with a variable
		// https://eslint.org/docs/rules/no-label-var
		'no-label-var': 'error',

		// disallow specific globals
		'no-restricted-globals': [
			'error',
			{
				message:
					'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
				name: 'isFinite',
			},
			{
				message:
					'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
				name: 'isNaN',
			},
			{
				message:
					'Use window.addEventListener instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'addEventListener',
			},
			{
				message:
					'Use window.blur instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'blur',
			},
			{
				message:
					'Use window.close instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'close',
			},
			{
				message:
					'Use window.closed instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'closed',
			},
			{
				message:
					'Use window.confirm instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'confirm',
			},
			{
				message:
					'Use window.defaultStatus instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'defaultStatus',
			},
			{
				message:
					'Use window.defaultstatus instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'defaultstatus',
			},
			{
				message:
					'Use window.event instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'event',
			},
			{
				message:
					'Use window.external instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'external',
			},
			{
				message:
					'Use window.find instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'find',
			},
			{
				message:
					'Use window.focus instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'focus',
			},
			{
				message:
					'Use window.frameElement instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'frameElement',
			},
			{
				message:
					'Use window.frames instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'frames',
			},
			{
				message:
					'Use window.history instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'history',
			},
			{
				message:
					'Use window.innerHeight instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'innerHeight',
			},
			{
				message:
					'Use window.innerWidth instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'innerWidth',
			},
			{
				message:
					'Use window.length instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'length',
			},
			{
				message:
					'Use window.location instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'location',
			},
			{
				message:
					'Use window.locationbar instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'locationbar',
			},
			{
				message:
					'Use window.menubar instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'menubar',
			},
			{
				message:
					'Use window.moveBy instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'moveBy',
			},
			{
				message:
					'Use window.moveTo instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'moveTo',
			},
			{
				message:
					'Use window.name instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'name',
			},
			{
				message:
					'Use window.onblur instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'onblur',
			},
			{
				message:
					'Use window.onerror instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'onerror',
			},
			{
				message:
					'Use window.onfocus instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'onfocus',
			},
			{
				message:
					'Use window.onload instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'onload',
			},
			{
				message:
					'Use window.onresize instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'onresize',
			},
			{
				message:
					'Use window.onunload instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'onunload',
			},
			{
				message:
					'Use window.open instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'open',
			},
			{
				message:
					'Use window.opener instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'opener',
			},
			{
				message:
					'Use window.opera instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'opera',
			},
			{
				message:
					'Use window.outerHeight instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'outerHeight',
			},
			{
				message:
					'Use window.outerWidth instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'outerWidth',
			},
			{
				message:
					'Use window.pageXOffset instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'pageXOffset',
			},
			{
				message:
					'Use window.pageYOffset instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'pageYOffset',
			},
			{
				message:
					'Use window.parent instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'parent',
			},
			{
				message:
					'Use window.print instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'print',
			},
			{
				message:
					'Use window.removeEventListener instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'removeEventListener',
			},
			{
				message:
					'Use window.resizeBy instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'resizeBy',
			},
			{
				message:
					'Use window.resizeTo instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'resizeTo',
			},
			{
				message:
					'Use window.screen instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'screen',
			},
			{
				message:
					'Use window.screenLeft instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'screenLeft',
			},
			{
				message:
					'Use window.screenTop instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'screenTop',
			},
			{
				message:
					'Use window.screenX instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'screenX',
			},
			{
				message:
					'Use window.screenY instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'screenY',
			},
			{
				message:
					'Use window.scroll instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'scroll',
			},
			{
				message:
					'Use window.scrollbars instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'scrollbars',
			},
			{
				message:
					'Use window.scrollBy instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'scrollBy',
			},
			{
				message:
					'Use window.scrollTo instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'scrollTo',
			},
			{
				message:
					'Use window.scrollX instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'scrollX',
			},
			{
				message:
					'Use window.scrollY instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'scrollY',
			},
			{
				message:
					'Use window.self instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'self',
			},
			{
				message:
					'Use window.status instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'status',
			},
			{
				message:
					'Use window.statusbar instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'statusbar',
			},
			{
				message:
					'Use window.stop instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'stop',
			},
			{
				message:
					'Use window.toolbar instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'toolbar',
			},
			{
				message:
					'Use window.top instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
				name: 'top',
			},
		],

		// disallow declaration of variables already declared in the outer scope
		'no-shadow': 'error',

		// disallow shadowing of names such as arguments
		'no-shadow-restricted-names': 'error',

		// disallow use of undeclared variables unless mentioned in a /*global */ block
		'no-undef': 'error',

		// disallow use of undefined when initializing variables
		'no-undef-init': 'error',

		// disallow use of undefined variable
		// https://eslint.org/docs/rules/no-undefined
		// TODO: enable?
		'no-undefined': 'off',

		// disallow declaration of variables that are not used in the code
		'no-unused-vars': [
			'error',
			{ args: 'after-used', ignoreRestSiblings: true, vars: 'all' },
		],

		// disallow use of variables before they are defined
		'no-use-before-define': [
			'error',
			{ classes: true, functions: true, variables: true },
		],
	},
};

export default rules;
