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
            this.handleStyles(await page.module.ViewStyles());
            await page.module.ViewTemplate(this.AppElement);
            this.handleScripts(await page.module.ViewScripts());

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
}