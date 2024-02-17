/**
 * A Page object represents a single page of a website.
 *
 * @param {{image: '',title: '',description: '',keywords: [''],author: ''}} seo
 * @param {string} js
 * @param {string} html
 * @param {string} css
 */
export class Page {
	constructor(
		seo = {
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
	 * Sets the SEO meta tags.
	 * @param {{image: string,title: string,description: string,keywords: string[],author: string}} obj
	 */
	async SEO(obj) {
		this.seo = obj;
	}

	/**
	 * Sets the Javascript modules.
	 * @param {string} str
	 */
	async JS(str) {
		this.js = str;
		return this.js;
	}

	/**
	 * Sets the HTML template.
	 * @param {string} str
	 */
	async HTML(str) {
		this.html = str;
		return this.html;
	}

	/**
	 * Sets the CSS modules.
	 * @param {string} str
	 */
	async CSS(str) {
		this.css = str;
		return this.css;
	}
}

export default Page;
