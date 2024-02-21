import { promises } from 'fs';
import { resolve } from 'path';
import { CreatePage } from '../../utils/createPage';
import { GenerateEndpoints } from '../../utils/generateEndpoints';
import { WalkDir } from '../../utils/walkDir';

/** @type {String} */
const sourceDir = resolve(__dirname, '../../../src/pages');

/** @type {Set<Endpoint>} */
const endpoints = new Set();

const Pager = {
	name: 'pager',
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
						endpoints.add(CreatePage(sourceDir, file));
					}
				);

				const pagesList = await GenerateEndpoints(Array.from(endpoints));

				if (process.env.NODE_ENV !== 'production') {
					const dir = '.server';
					await promises.mkdir(dir, { recursive: true }); // This will create the directory if it doesn't exist
					await promises.writeFile(`${dir}/pages.js`, pagesList);
				}
			})();
		}
	},
};

export default Pager;
