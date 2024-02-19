// import { promises } from 'fs';
// import { resolve, relative } from 'path';
// import { CreatePage, GenerateEndpoints, WalkDir } from '../utils/index.js';
// import { build } from 'vite';

// /** @type {String} */
// console.log('dirname', __dirname);
// const sourceDir = resolve(__dirname, '../../lib/plugins');

// const Plugins = {
// 	name: 'plugins',
// 	async buildStart() {
// 		try {
// 			if (process.env.NODE_ENV !== 'production') {
// 				// Write the route list to a file (only during development or build time)
// 				(async () => {
// 					WalkDir(
// 						sourceDir,

// 						/**
// 						 * @param {string} file
// 						 */
// 						(file) => {
// 							let entry = resolve(sourceDir, file);

// 							let plugin = relative(sourceDir, file)
// 								.replace(/\\/g, '/')
// 								.replace('/@', '');

// 							if (!plugin.endsWith('.mjs')) {
// 								console.log('Entry', entry);
// 								console.log('fileName', plugin);

// 								build({
// 									build: {
// 										lib: {
// 											entry: entry,
// 											formats: ['es'],
// 											fileName: plugin, // Output file name
// 										},
// 										rollupOptions: {
// 											output: {
// 												dir: resolve(__dirname, '../../vendors/js'),
// 											},
// 										},
// 									},
// 								});
// 							}
// 						}
// 					);
// 				})();
// 			}
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	},
// };

// export default Plugins;
