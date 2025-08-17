export const FilesGlob = {
	Ignores: [
		'{build,dist,out}{,-*,_*}/**',
		'{coverage,node_modules,patches}/**',
	],
	JS: ['**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts}'],
	JSTests: ['**/*.{spec,test}.{js,jsx,cjs,mjs,ts,tsx,cts,mts}'],
	JSX: ['**/*.{jsx,tsx}'],
	JSXTests: ['**/*.{spec,test}.{jsx,tsx}'],
	PackageJSON: ['**/package.json'],
	TS: ['**/*.{ts,tsx,cts,mts}'],
};
