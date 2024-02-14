/**
 * Generates a list of routes based on the structure of the "pages" directory.
 *
 * @module routeGenerator
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
            const routeName = path.relative(pagesDirectory, filePath).replace(/\\/g, '/').replace('.js', '');
            
            let pageName = function(){
                let rn = routeName.replace("/+page", "");
                switch (rn) {
                    case '+page':
                        return 'root';
                    case '+error':
                        return "";
                    default:
                        return rn;
                }
            };

            let pageUrl = function(){
                let rn = `/${routeName}.js`.replace('+page.js','').slice(0,-1);
                switch (rn) {
                    case '':
                        return '/';
                    default:
                        return rn;
                }
            };
            
            pages.push({
                name: pageName(),
                path: pageUrl(),
                component: `./views/${routeName}.js`,
            });
        }
    }
}

// Define the path to the "pages" directory
const pagesDirectory = path.join(__dirname, '../../src/views');
const pages = []; // Array to store route information

// Generate the route list
walkDir(pagesDirectory);
const routeList = JSON.stringify(pages, null, 2);

// Write the route list to a file (only during development or build time)
if (process.env.NODE_ENV !== 'production') {
    fs.writeFileSync('src/routes.json', routeList);
}
