
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
        } else {
            throw new Error('Element is not an instance of Element');
        }
    }

    /**
     * @param {String} styles
     */
    async handleStyles(styles) {


        let style = document.createElement('style');
        style.setAttribute('type', 'text/css')
        style.innerHTML = styles;

        if (style.innerHTML.trim() === '') {
            return
        }

        document.head.appendChild(style);
    }

    /**
     * @param {String} scripts
     */
    async handleScripts(scripts) {
        let script = document.createElement('script');
        script.type = 'module'
        script.crossOrigin = 'user-credentials';
        script.innerHTML = scripts;

        if (script.innerHTML.trim() === '') {
            return
        }

        document.body.appendChild(script);
    }

    /**
     * @description Handles routing based on filesystem mechanics.
     * @returns {Promise<RouteModule>} A Promise that resolves when the routing and content loading are complete.
     */
    async router(pathname = document.location.pathname) {

        const match = this.AppRoutes.find((route) =>
            route.path.toLocaleLowerCase().trim() === pathname.toLocaleLowerCase().trim()
        );

        const route = match?.module;

        if (route) {
            this.handleStyles(await route.ViewStyles());
            await route.ViewTemplate(this.AppElement);
            this.handleScripts(await route.ViewScripts());

            return route;
        } else {
            try {
                // @ts-ignore
                const module = await import('/src/views/404/+page.js');
                await module.ViewTemplate(this.AppElement);

                return module;  // Return the 404 module
            } catch (error) {
                console.error("Error importing 404 module: ", error);
            }
        }
    }

}