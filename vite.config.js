import path from 'path';
import buildOptions from './tools/vite.buildOptions.js';
import Pager from './lib/packages/pager/vite.mjs';
import { defineConfig } from 'vite';

// @ts-ignore
export default defineConfig(({}) => {
	return {
		build: {
			...buildOptions,
			outDir: '.dist',
		},
		esbuild: {
			drop: ['console', 'debugger'],
		},
		plugins: [Pager],
		publicDir: './public',
		resolve: {
			alias: {
				'~dist': path.resolve(__dirname, './.dist'),
				'~kit': path.resolve(__dirname, './.kit'),
				'~lib': path.resolve(__dirname, './lib'),
				'~public': path.resolve(__dirname, './public'),
				'~src': path.resolve(__dirname, './src'),
				'~tools': path.resolve(__dirname, './tools'),
				'~': path.resolve(__dirname, './'),
			},
		},
	};
});
