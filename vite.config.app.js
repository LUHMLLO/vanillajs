import { defineConfig } from 'vite';
import { buildOptions } from './build.options';

export default defineConfig({
	// @ts-ignore
	build: {
		outDir: 'dist/codepens',
		...buildOptions,
	},
	esbuild: {
		drop: ['console', 'debugger'],
	},
});
