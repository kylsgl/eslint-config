import { ESLint } from 'eslint';

async function eslintMeasure(): Promise<void> {
	const eslint = new ESLint();

	const start: number = performance.now();

	await eslint.lintFiles('./src');

	const end: number = performance.now();

	const duration: string = ((end - start) / 1_000).toFixed(2);

	console.info(
		'\u001B[32m%s\u001B[0m',
		`⌛ESLint took ${duration}s to complete`,
	);
}

await eslintMeasure();
