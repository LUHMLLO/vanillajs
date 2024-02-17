/**
 * Generates a list of routes based on the structure of the "pages" directory.
 *
 * @module Pager
 */

const fs = require('fs');
const path = require('path');
const pagesDirectory = path.join(__dirname, '../../src/pages/');
const pages = [];

/**
 * Recursively walks through a directory and its subdirectories.
 *
 * @param {string} dir - The path to the directory to walk.
 */
function walkDir(dir) {
	const files = fs.readdirSync(dir);

	files.forEach((file) => {
		const filePath = path.join(dir, file);
		const stats = fs.statSync(filePath);

		if (stats.isDirectory()) {
			walkDir(filePath);
		} else if (stats.isFile() && file.endsWith('.js')) {
			const routeName = path
				.relative(pagesDirectory, filePath)
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
				import: `./pages/${routeName}.js`,
			};

			if (!page.import.includes('+error.js')) {
				pages.push(page);
			}
		}
	});
}

// Generate the route list
walkDir(pagesDirectory);

/**
 * Converts array of pages to JavaScript import statements.
 *
 * @param {Array<{import: string, path: string}>} pages - The pages to convert.
 * @returns {string} The JavaScript import statements.
 */
function arrayToJs(pages) {
	let js = '';
	let exports = 'export default [\n';

	pages.forEach((page) => {
		const importName = page.import.replace(/[^a-zA-Z0-9]/g, '_');
		js += `import * as ${importName} from '${page.import}';\n`;
		exports += `\t{\n\t\tpath: '${page.path}',\n\t\timport: ${importName},\n\t},\n`;
	});

	exports += '];\n';

	return js + exports;
}

const pagesList = arrayToJs(pages);

// Write the route list to a file (only during development or build time)
if (process.env.NODE_ENV !== 'production') {
	fs.writeFileSync('src/pages.js', pagesList);
}
