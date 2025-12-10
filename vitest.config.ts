import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		coverage: {
			provider: 'istanbul',
		},
		environment: 'node',
		include: ['./src/**/*.{test,spec}.{ts,tsx}'],
		reporters: 'verbose',
		testTimeout: 15e3,
		watch: false,
	},
});
