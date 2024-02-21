import buildOptions from './buildOptions';
import { defineConfig } from 'vite';
import { terserMinify } from './terserMinify';

// @ts-ignore
export default defineConfig(({}) => {
	return {
		build: {
			...buildOptions,
			lib: {
				entry: ['lib/plugins/drops.js', 'lib/plugins/themeSchemes.js'],
				formats: ['es'],
				fileName: '[name]',
			},
			outDir: 'static/assets/js',
		},
		esbuild: {
			drop: ['console', 'debugger'],
		},
		plugins: [terserMinify()],
	};
});
