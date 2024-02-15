/** @returns {Promise<Object>} */
export async function SEO() {
	return {
		author: 'lm',
		description: 'Design System - Item & its Param Page',
		image: '',
		keywords: '',
		title: 'Item - param',
	};
}

/** @returns {Promise<String>} */
export async function Scripts() {
	let js = String.raw;

	return js`
    `;
}

/** @returns {Promise<string>}*/
export async function Html() {
	let html = String.raw;

	return html` <h1>Item 'param goes here'</h1> `;
}

/** @returns {Promise<String>} */
export async function Css() {
	let css = String.raw;

	return css``;
}
