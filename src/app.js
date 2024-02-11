
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
     * @description Handles routing based on filesystem mechanics.
     * @returns {Promise<RouteModule>} A Promise that resolves when the routing and content loading are complete.
     */
    async router(pathname = document.location.pathname) {
        const match = this.AppRoutes.find((route) => route.path.toLocaleLowerCase().trim() === pathname.toLocaleLowerCase().trim());
        const route = match?.module;
        if (route) {
            let styles = await route.ViewStyles(); // assuming this returns a string with HTML tags
            let scripts = await route.ViewScripts(); // assuming this returns a string with HTML tags
            let styleDiv = document.createElement('div');
            styleDiv.innerHTML = styles;
            document.head.appendChild(styleDiv.querySelector('style'));
            let scriptDiv = document.createElement('div');
            scriptDiv.innerHTML = scripts;
            scriptDiv.querySelectorAll('script').forEach((oldScript) => {
                let script = document.createElement('script');
                script.textContent = oldScript.textContent;
                if (oldScript.src) {
                    script.src = oldScript.src;
                }
                document.body.appendChild(script);
            })
            this.AppElement.innerHTML = await route.ViewTemplate();
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