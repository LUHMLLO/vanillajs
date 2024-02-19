import { lstatSync, readdirSync } from 'fs';
import { join, relative } from 'path';

/**
 * Generic walkdir function that takes a directory path and a callback function as parameters. The callback function is called for each file or directory in the directory path.
 * @param {string} dirPath The directory path to walk.
 * @param {function} callback The callback function to call for each file or directory in the directory path.
 */
export function WalkDir(dirPath, callback) {
	// Get a list of all files and directories in the directory path.
	const dirFiles = readdirSync(dirPath);

	// Iterate over the list of files and directories.
	for (const file of dirFiles) {
		// Get the full path to the file or directory.
		const filePath = join(dirPath, file);

		// Check if the file or directory is a file.
		if (lstatSync(filePath).isFile()) {
			// Call the callback function for the file.
			callback(filePath);
		} else if (lstatSync(filePath).isDirectory()) {
			// Recursively walk the directory.
			WalkDir(filePath, callback);
		}
	}
}

/**
 * @param {string} dirPath
 * @param {string} filePath
 */
export function CreatePage(dirPath, filePath) {
	const routeName = relative(dirPath, filePath)
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

	return page;
}

/**
 * Converts array of pages to JavaScript import statements.
 *
 * @param {EndpointsList} endpoints - The pages to convert.
 * @returns {Promise<String>} The JavaScript import statements.
 */
export async function GenerateEndpoints(endpoints) {
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
