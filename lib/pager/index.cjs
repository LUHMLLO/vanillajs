/**
 * Generates a list of routes based on the structure of the "pages" directory.
 *
 * @module Pager
 */

const fs = require('fs');
const path = require('path');

/** @type {String} */
const sourceDir = path.join(__dirname, '../../src/pages/');

/** @type {EndpointsList} */
const endpoints = []; // Array to store route information

/**
 * Recursively walks through a directory and its subdirectories.
 *
 * @param {string} dir - The path to the directory to walk.
 */
async function walkDir(dir) {
	const files = fs.readdirSync(dir);

	files.forEach((file) => {
		const filePath = path.join(dir, file);
		const stats = fs.statSync(filePath);

		if (stats.isDirectory()) {
			walkDir(filePath);
		} else if (stats.isFile() && file.endsWith('.js')) {
			const routeName = path
				.relative(sourceDir, filePath)
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
				endpoints.push(page);
			}
		}
	});

	let pagesList = await PageToEndpoint(endpoints);

	// Write the route list to a file (only during development or build time)
	if (process.env.NODE_ENV !== 'production') {
		fs.writeFileSync('.server/pages.js', pagesList);
	}
}

/**
 * Converts array of pages to JavaScript import statements.
 *
 * @param {EndpointsList} endpoints - The pages to convert.
 * @returns {string} The JavaScript import statements.
 */
function PageToEndpoint(endpoints) {
	let js = '';
	let exports = 'export default [\n';

	endpoints.forEach((/** @type {Endpoint} */ end) => {
		const importName = end.import.replace(/[^a-zA-Z0-9]/g, '_');
		js += `import * as ${importName} from '${end.import}';\n`;
		exports += `\t{\n\t\tpath: '${end.path}',\n\t\timport: ${importName},\n\t},\n`;
	});

	exports += '];\n';

	return js + exports;
}

walkDir(sourceDir);
