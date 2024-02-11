/**
@typedef {Object} RouteModule

@property {function} ViewStyles - The function to get the styles for the route.
@property {function} ViewTemplate - The function to get the HTML template for the route.
@property {function} ViewScripts - The function to get the scripts for the route.
*/

/**
@typedef {Object} Route

@property {string} path - The path of the route.
@property {RouteModule} module - The module to handle the route.
*/

/**
@typedef {Route[]} Router

@property {function} find - The function to find a route in the router.
*/

/**
@typedef {HTMLElement} RenderView

@property {string} innerHTML - The HTML content of the element.
*/