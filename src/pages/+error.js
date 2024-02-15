/** @returns {Promise<Object>} */
export async function SEO() {
	return {
		author: 'lm',
		description: 'Design System - Error Page',
		image: '',
		keywords: '',
		title: '404 not found',
	};
}

/** @returns {Promise<String>} */
export async function Scripts() {
	let js = String.raw;

	return js`
    `;
}

/** @returns {Promise<String>} */
export async function Html() {
	let html = String.raw;

	return html` <h1>4.0.4</h1> `;
}

/** @returns {Promise<String>} */
export async function Css() {
	let css = String.raw;

	return css``;
}
