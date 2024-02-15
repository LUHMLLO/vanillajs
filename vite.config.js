import path from 'path';
import { defineConfig } from 'vite';
import { buildOptions } from './build.options';

export default defineConfig({
	// @ts-ignore
	build: {
		outDir: 'dist',
		...buildOptions,
	},
	esbuild: {
		drop: ['console', 'debugger'],
	},
	resolve: {
		alias: {
			'~': path.resolve(__dirname, './src'),
		},
	},
});
