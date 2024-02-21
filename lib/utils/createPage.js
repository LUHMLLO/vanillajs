import { relative } from 'path';

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
