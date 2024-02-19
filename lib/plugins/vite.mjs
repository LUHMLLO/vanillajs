import { resolve, relative } from 'path';
import { WalkDir } from '../utils/index.js';
import { build } from 'vite';

/** @type {String} */
const sourceDir = resolve(__dirname, '../../lib/plugins');

const pluginFiles = new Set();

const Plugins = {
	name: 'plugins',
	async buildStart() {
		if (process.env.NODE_ENV !== 'production') {
			// Write the route list to a file (only during development or build time)
			(async () => {
				WalkDir(
					sourceDir,
					/**
					 * @param {string} file
					 */
					(file) => {
						let entry = file;

						let plugin = relative(sourceDir, file)
							.replace(/\\/g, '/')
							.replace('/@.js', '');

						if (!plugin.endsWith('.mjs')) {
							pluginFiles.add({
								entry: entry,
								fileName: plugin,
							});
						}
					}
				);

				Array.from(pluginFiles).forEach(async (plugin) => {
					await build({
						build: {
							emptyOutDir: false,
							copyPublicDir: false,
							lib: {
								entry: plugin.entry,
								formats: ['es'],
								fileName: plugin.fileName,
							},
							rollupOptions: {
								output: {
									dir: resolve(__dirname, '../../vendors'),
								},
							},
						},
					});
				});
			})();
		}
	},
};

export default Plugins;
