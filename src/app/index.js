/**
 * @description Core app module; Main Service; Heart of the app.
 */
export class App {

    /**
     * @param {RenderView} RenderView - The element where the content will be rendered.
     * @param {Pager} Pages - The array of route objects.
     */
    constructor (RenderView = document.querySelector('#app'), Pages) {
        if (RenderView instanceof HTMLElement) {
            this.AppElement = RenderView;
            this.AppPages = Pages
            return;
        }

        throw new Error('App container is not an instance of <Element | HTMLElement>');
    }

    async mount() {
        const pathname = document.location.pathname

        const match = this.AppPages.find(( /** @type {Page} */ page) =>
            page.path.toLocaleLowerCase().trim() === pathname.toLocaleLowerCase().trim()
        );

        /** @type {Page} page */
        const page = match;

        if (page) {
            // this.handleStyles(await route.ViewStyles());
            await page.module.ViewTemplate(this.AppElement);
            // this.handleScripts(await route.ViewScripts());

            return page;
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