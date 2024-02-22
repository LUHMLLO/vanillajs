/**
 * @description A Page object represents a single page of a website.
 *
 * @param {{icon: '',image: '',title: '',description: '',keywords: [''],author: ''}} seo
 * @param {string} js
 * @param {string} html
 * @param {string} css
 */
export default class Page {
	constructor(
		seo = {
			icon: '',
			image: '',
			title: '@Page',
			description: 'A @Page model',
			keywords: ['package', 'class', 'page', 'model'],
			author: '@Pager',
		},
		js = String.raw``,
		html = String.raw`<h1>Hello!, I'm a @Page model.</h1>`,
		css = String.raw``
	) {
		this.seo = seo;
		this.js = js;
		this.html = html;
		this.css = css;
	}

	/**
	 * @description Sets the SEO meta tags.
	 *
	 * @param {{icon: string,image: string,title: string,description: string,keywords: string[],author: string}} obj
	 */
	async SEO(obj) {
		this.seo = obj;
	}

	/**
	 * @description Sets the Javascript modules.
	 *
	 * @param {string} str
	 */
	async JS(str) {
		this.js = str;
		return this.js;
	}

	/**
	 * @description Sets the HTML template.
	 *
	 * @param {string} str
	 */
	async HTML(str) {
		this.html = str;
		return this.html;
	}

	/**
	 * @description Sets the CSS modules.
	 *
	 * @param {string} str
	 */
	async CSS(str) {
		this.css = str;
		return this.css;
	}
}
