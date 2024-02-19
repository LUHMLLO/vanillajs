import path from 'path';
import { defineConfig } from 'vite';
import Pager from './lib/packages/pager/index.mjs';

export default defineConfig(({}) => {
	return {
		build: {
			minify: 'terser',
			outDir: 'dist',
			target: ['ESNext'],
			terserOptions: {
				safari10: true,
				ie8: true,
				compress: true,
				mangle: true,
				module: true,
				output: {
					beautify: false,
				},
			},
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
