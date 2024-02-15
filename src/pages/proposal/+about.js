/** @returns {Promise<Object>} */
export async function SEO() {
	return {
		author: 'lm',
		description: 'Design System - Proposal Tool About Page',
		image: '',
		keywords: '',
		title: 'Proposal Tool - About',
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

	return html` <h1>Proposal About</h1> `;
}

/** @returns {Promise<String>} */
export async function Css() {
	let css = String.raw;

	return css``;
}
