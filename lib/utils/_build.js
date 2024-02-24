import buildOptions from '../../tools/vite.buildOptions';
import { defineConfig } from 'vite';
import { terserMinify } from '../../tools/vite.terserMinify';

// @ts-ignore
export default defineConfig(({}) => {
	return {
		build: {
			...buildOptions,
			copyPublicDir: false,
			lib: {
				entry: ['lib/utils/drops.js', 'lib/utils/themeSchemes.js'],
				formats: ['es'],
				fileName: '[name]',
			},
			outDir: 'public/assets/js',
		},
		plugins: [terserMinify()],
	};
});
