import { promises } from 'fs';
import { resolve, join, relative } from 'path';

/** @type {String} */
const sourceDir = resolve(__dirname, '../../src/pages/');

/** @type {Set<Endpoint>} */
const endpoints = new Set();

/**
 * Recursively walks through a directory and its subdirectories.
 *
 * @param {string} dir - The path to the directory to walk.
 */
async function walkDir(dir) {
	const files = await promises.readdir(dir);

	await Promise.all(
		files.map(async (file) => {
			const filePath = join(dir, file);
			const stats = await promises.stat(filePath);

			if (stats.isDirectory()) {
				await walkDir(filePath);
			} else if (stats.isFile() && file.endsWith('.js')) {
				const routeName = relative(sourceDir, filePath)
					.replace(/\\/g, '/')
					.replace('.js', '');

				const pageUrl = () => {
					const stripTrailingSlash = (/** @type {string} */ str) =>
						str.endsWith('/') ? str.slice(0, -1) : str;
					const page = stripTrailingSlash(
						`/${routeName}.js`
							.replace('+page.js', '')
							.replace('+', '')
							.replace('.js', '')
					);
					return page === '' ? '/' : page;
				};

				const page = {
					path: pageUrl(),
					import: `~src/pages/${routeName}.js`,
				};

				if (!page.import.includes('+error.js')) {
					endpoints.add(page);
				}
			}
		})
	);
}

/**
 * Converts array of pages to JavaScript import statements.
 *
 * @param {EndpointsList} endpoints - The pages to convert.
 * @returns {Promise<String>} The JavaScript import statements.
 */
async function PageToEndpoint(endpoints) {
	let js = '';
	let exports = 'export default [\n';

	endpoints.forEach((end) => {
		const importName = end.import.replace(/[^a-zA-Z0-9]/g, '_');
		js += `import * as ${importName} from '${end.import}';\n`;
		exports += `\t{\n\t\tpath: '${end.path}',\n\t\timport: ${importName},\n\t},\n`;
	});

	exports += '];\n';

	return js + exports;
}

export const Pager = {
	name: 'pager',
	async buildStart() {
		if (process.env.NODE_ENV !== 'production') {
			// Write the route list to a file (only during development or build time)
			(async () => {
				await walkDir(sourceDir);
				const pagesList = await PageToEndpoint(Array.from(endpoints));

				if (process.env.NODE_ENV !== 'production') {
					const dir = '.server';
					await promises.mkdir(dir, { recursive: true }); // This will create the directory if it doesn't exist
					await promises.writeFile(`${dir}/pages.js`, pagesList);
				}
			})();
		}
	},
};
