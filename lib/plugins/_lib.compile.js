import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(({}) => {
	return {
		build: {
			lib: {
				entry: ['lib/plugins/drops.js','lib/plugins/themeSchemes.js'],
				formats: ['es'],
			},
			minify: 'terser',
			outDir: 'static/assets/js',
			target: ['ESNext'],
			terserOptions: {
				safari10: true,
				ie8: true,
				compress: true,
				mangle: true,
				module: true,
			},
		},
		esbuild: {
			drop: ['console', 'debugger'],
		},
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
