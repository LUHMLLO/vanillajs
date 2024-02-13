/**
* @typedef {Object} PageModule
* @property {function} ViewStyles - The function to get the styles for the route.
* @property {function} ViewTemplate - The function to get the HTML template for the route.
* @property {function} ViewScripts - The function to get the scripts for the route.
*/

/**
* @typedef {Object} Page
* @property {string} name - The path of the route.
* @property {string} path - The path of the route.
* @property {PageModule} module - The module to handle the route.
*/

/**
* @typedef {Page[]} Pager
* @property {function} find - The function to find a route in the router.
*/