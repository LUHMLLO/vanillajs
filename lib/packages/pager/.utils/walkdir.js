import { promises } from 'fs';
import { resolve, join, relative } from 'path';

/**
 * Recursively walks through a directory and its subdirectories.
 * @param {string} dir - The path to the directory to walk.
 * @param {string} sourceDir
 * @param {{ add: (arg0: { path: string; import: string; }) => void; }} endpoints
 */
export default async function WalkDir(dir, sourceDir, endpoints) {
	const files = await promises.readdir(dir);

	await Promise.all(
		files.map(async (file) => {
			const filePath = join(dir, file);
			const stats = await promises.stat(filePath);

			if (stats.isDirectory()) {
				await WalkDir(filePath, sourceDir, endpoints);
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
