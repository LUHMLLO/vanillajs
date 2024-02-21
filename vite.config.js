import path from 'path';
import buildOptions from './lib/vite/buildOptions';
import Pager from './lib/packages/pager/vite.mjs';
import { defineConfig } from 'vite';

// @ts-ignore
export default defineConfig(({}) => {
	return {
		build: {
			...buildOptions,
			outDir: 'dist',
		},
		esbuild: {
			drop: ['console', 'debugger'],
		},
		plugins: [Pager],
		publicDir: './static',
		resolve: {
			alias: {
				'~server': path.resolve(__dirname, './.server'),
				'~lib': path.resolve(__dirname, './lib'),
				'~src': path.resolve(__dirname, './src'),
				'~root': path.resolve(__dirname, './'),
			},
		},
	};
});
