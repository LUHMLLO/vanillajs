import fs from 'fs-extra';

/**
 * This function serves as the application's intrinsic router, auto-generating routes based on
 * a specified file system structure.
 *
 * @returns {Promise<Page[]>} Resolves to an array of `Page` objects representing the generated routes.
 */
export default async function Pager() {

    /**
     * An array to store the extracted page information.
     *
     * @type {Page[]}
     */
    const pages = [];

    /**
     * The base directory where views are located.
     *
     * @type {string}
     */
    const path = '../../../src/views';

    /**
     * Reads the directory contents and processes each file or subdirectory.
     *
     * @param {string} path The path to the directory to read.
     * @returns {void}
     */
    (await fs.promises.readdir(path)).forEach(
        async (file) => {
            /** @type {String} fullPath */
            const fullPath = `${path}/${file}`;

            /** @type {fs.Stats} fullPath */
            const stats = await fs.promises.stat(fullPath);

            if (stats.isFile()) {
                const { ViewScripts, ViewStyles, ViewTemplate } = await import(fullPath);

                /** @type {Page} */
                const page = { name: 'root', path: `/`, module: { ViewScripts, ViewStyles, ViewTemplate } };

                pages.push(page);
            }

            if (stats.isDirectory()) {
                const { ViewScripts, ViewStyles, ViewTemplate } = await import(`${fullPath}/+page.js`);

                /** @type {Page} */
                const page = { name: file, path: `/${file}`, module: { ViewScripts, ViewStyles, ViewTemplate } };

                pages.push(page);
            }
        }
    )

    return pages;
}