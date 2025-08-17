import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		coverage: {
			all: false,
			provider: 'istanbul',
		},
		environment: 'node',
		globals: true,
		reporters: 'verbose',
		testTimeout: 15e3,
		watch: false,
	},
});
