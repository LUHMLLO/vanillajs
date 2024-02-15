/**
 * Generates a list of routes based on the structure of the "pages" directory.
 *
 * @module Pager
 */

// Import required modules
const fs = require('fs');
const path = require('path');

/**
 * Recursively walks through a directory and its subdirectories.
 *
 * @param {string} dir - The path to the directory to walk.
 * @returns {void}
 */
function walkDir(dir) {
	const files = fs.readdirSync(dir);

	for (const file of files) {
		const filePath = path.join(dir, file);
		const stats = fs.statSync(filePath);

		if (stats.isDirectory()) {
			walkDir(filePath);
		} else if (stats.isFile() && file.endsWith('.js')) {
			// Construct route information for JavaScript files
			const routeName = path
				.relative(pagesDirectory, filePath)
				.replace(/\\/g, '/')
				.replace('.js', '');

			console.log('Pager: $routeName: ', routeName);

			let pageUrl = function () {
				const stripTrailingSlash = (/** @type {string} */ str) => {
					return str.endsWith('/') ? str.slice(0, -1) : str;
				};

				const page = stripTrailingSlash(
					`/${routeName}.js`
						.replace('+page.js', '')
						.replace('+', '')
						.replace('.js', '')
				);

				switch (page) {
					case '':
						return '/';
					default:
						return page;
				}
			};

			console.log('Pager: $pageUrl: ', pageUrl());

			const page = {
				path: pageUrl(),
				import: `./pages/${routeName}.js`,
			};

			console.log('App: $page', page);

			if (!page.import.includes('+error.js')) {
				pages.push(page);
			}
		}
	}
}

// Define the path to the "pages" directory
const pagesDirectory = path.join(__dirname, '../../src/pages/');
const pages = []; // Array to store route information

// Generate the route list
walkDir(pagesDirectory);
const pagesList = JSON.stringify(pages, null, 2);

// Write the route list to a file (only during development or build time)
if (process.env.NODE_ENV !== 'production') {
	fs.writeFileSync('public/pages.json', pagesList);
}
