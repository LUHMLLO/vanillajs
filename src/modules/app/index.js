import Inspect from '~lib/packages/inspect/index.mjs';

/**
 * @description Core app module; Main Service; Heart of the app.
 */
export default class App {
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

		Inspect('App', 'Router', 'debug', 'currentRoute', currentRoute);

		let route = this.AppRoutes.filter(
			(route) => route.path === currentRoute
		)[0];

		if (route) {
			Inspect('App', 'Router', 'debug', 'route', route);

			/** @type {any} */
			const { page } = route.import;

			this.handleSEO(page.seo);
			this.handleCss(page.css);
			this.handleHtml(page.html);
			this.handleScripts(page.js);
			return;
		}

		try {
			Inspect('App', 'Router', 'error', 'route', route);

			const { page } = await import('~src/pages/+error.js');

			this.handleHtml(page.html);
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
