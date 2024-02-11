
/**
 * @description Core app module; Main Service; Heart of the app.
 */
export class App {

    /**
     * @param {RenderView} RenderView - The element where the content will be rendered.
     * @param {Router} Router - The array of route objects.
     */
    constructor (RenderView = document.querySelector('#app'), Router) {
        if (RenderView instanceof HTMLElement) {
            this.AppElement = RenderView;
            this.AppRoutes = Router;
            this.DocumentHead = document.head;
            this.DocumentBody = document.body;
        } else {
            throw new Error('Element is not an instance of Element');
        }
    }

    /**
     * @description Handles routing based on filesystem mechanics.
     * @returns {Promise<RouteModule>} A Promise that resolves when the routing and content loading are complete.
     */
    async router(pathname = document.location.pathname) {
        const match = this.AppRoutes.find((route) => route.path.toLocaleLowerCase().trim() === pathname.toLocaleLowerCase().trim());
        const route = match?.module;


        if (route) {
            console.log(this.DocumentBody)
            this.DocumentHead.appendChild = await route.ViewStyles();
            this.DocumentBody.appendChild = await route.ViewScripts();
            this.AppElement.innerHTML = route.ViewTemplate();
            return route;  // Return the matched route as an object
        } else {
            try {
                // @ts-ignore
                const module = await import('/src/views/404');
                this.AppElement.innerHTML = module.ViewTemplate();
                return module;  // Return the 404 module
            } catch (error) {
                console.error("Error importing 404 module: ", error);
            }
        }
    }

}