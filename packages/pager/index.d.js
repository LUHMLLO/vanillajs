/**
 * @typedef {Page[]} Pager
 * @property {function} find - The function to find a route in the router.
 */

/**
 * @typedef {Object} Page
 * @property {string} name - The path of the route.
 * @property {string} path - The path of the route.
 * @property {PageModule} module - The module to handle the route.
 */

/**
 * @typedef {Object} PageModule
 * @property {function} SEO - The function to get the seo related attributes for the route.
 * @property {function} Css - The function to get the styles for the route.
 * @property {function} Html - The function to get the HTML template for the route.
 * @property {function} Scripts - The function to get the scripts for the route.
 */
