/**
 * @description Handles routing based on filesystem mechanics.
 * @param {Element} app - The element where the content will be rendered.
 * @returns {Promise<void>} A Promise that resolves when the routing and content loading are complete.
 */
export async function Router(app) {
    if (/** @type {boolean} */ app instanceof Element) {
        switch (/** @type {string} */ document.location.pathname) {
            case '/':
                app.innerHTML = './views/index.html';
                break;

            case '/components/productpacks':
                app.innerHTML = './views/components/productpacks/index.html';
                break;

            default:
                app.innerHTML = '404';
                break;
        }
    }
}
