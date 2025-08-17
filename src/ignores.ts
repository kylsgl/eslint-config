import { type Linter } from 'eslint';

import { FilesGlob } from './constants';

const ignores: Linter.Config = {
	ignores: FilesGlob.Ignores,
};

export default ignores;
