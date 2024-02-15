/**
 * @description Core app module; Main Service; Heart of the app.
 */
export class App {
	/**
	 * @param {RenderView} RenderView - The element where the content will be rendered.
	 * @param {Routes} Routes - The array of route objects.
	 */
	constructor(RenderView, Routes) {
		if (RenderView instanceof HTMLElement) {
			this.AppElement = RenderView;
			this.AppRoutes = Routes;
			return;
		}

		throw new Error(
			'App: RenderView shouled be an instance of <Element | HTMLElement>'
		);
	}

	async mount() {
		/** @type {String} */
		const currentRoute = document.location.pathname;

		console.log('App (Router): debug.currentRoute:', currentRoute);

		let route = this.AppRoutes.filter(
			(route) => route.path === currentRoute
		)[0];

		console.log('App (Router): debug.route:', route);

		if (route) {
			/** @type {PageModule} */
			const { SEO, Scripts, Html, Css } = await import(route.import);

			this.handleSEO(await SEO());
			this.handleCss(await Css());
			this.handleHtml(await Html());
			this.handleScripts(await Scripts());
			return;
		}

		try {
			console.log('App: Error');
			const page = await import('~/pages/+error.js');
			this.handleHtml(await page.Html());
		} catch (error) {
			console.error('App (Router): Error importing 404 from', error);
		}
	}

	/**
	 * @param {Object} seo
	 * @returns {Promise<void>}
	 */
	async handleSEO(seo) {
		// @ts-ignore
		document.head.querySelector('title').innerText = seo.title;

		for (const [key, value] of Object.entries(seo)) {
			document.head
				.querySelector(`meta[name='${key}']`)
				?.setAttribute('content', value);
		}
	}

	/**
	 * @param {String} css
	 * @returns {Promise<void>}
	 */
	async handleCss(css) {
		let style = document.createElement('style');
		style.setAttribute('type', 'text/css');
		style.innerHTML = css;

		if (style.innerHTML.trim() === '') {
			return;
		}

		document.head.appendChild(style);
	}

	/**
	 * @param {String} html
	 * @returns {Promise<void>}
	 */
	async handleHtml(html) {
		this.AppElement.innerHTML = html;
	}

	/**
	 * @param {String} js
	 * @returns {Promise<void>}
	 */
	async handleScripts(js) {
		let script = document.createElement('script');
		script.type = 'module';
		script.innerHTML = js;

		if (script.innerHTML.trim() === '') {
			return;
		}

		document.body.appendChild(script);
	}
}
