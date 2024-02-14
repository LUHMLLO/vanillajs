/**
 * @description Core app module; Main Service; Heart of the app.
 */
export class App {

    /**
     * @param {RenderView} RenderView - The element where the content will be rendered.
     * @param {Pager} Pages - The array of route objects.
     */
    constructor (RenderView, Pages) {
        if (RenderView instanceof HTMLElement) {
            this.AppElement = RenderView;
            this.AppPages = Pages
            return;
        }

        throw new Error('App container is not an instance of <Element | HTMLElement>');
    }

    async mount() {
        const pathname = document.location.pathname

        /** @type {Page | undefined} page */
        const page = this.AppPages.find(( /** @type {Page} */ page) =>
            page.path.toLocaleLowerCase().trim() === pathname.toLocaleLowerCase().trim()
        );

        if (page) {
            this.handleStyles(await page.module.ViewStyles());
            this.AppElement.innerHTML = await page.module.ViewTemplate();
            this.handleScripts(await page.module.ViewScripts());

            return page;
        } else {
            try {
                // @ts-ignore
                const page = await import('/src/views/404/+page.js');
                this.AppElement.innerHTML = await page.ViewTemplate();

                return page;
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