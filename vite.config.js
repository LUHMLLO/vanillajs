import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
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
	publicDir: './static',
	resolve: {
		alias: {
			'~server': path.resolve(__dirname, './.server'),
			'~lib': path.resolve(__dirname, './lib'),
			'~src': path.resolve(__dirname, './src'),
			'~root': path.resolve(__dirname, './'),
		},
	},
});
