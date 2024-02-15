/** @returns {Promise<Object>} */
export async function SEO() {
	return {
		author: 'lm',
		description: 'Design System - Proposal Tool Help Center Page',
		image: '',
		keywords: '',
		title: 'Proposal Tool - Help',
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

	return html` <h1>Proposal Help</h1> `;
}

/** @returns {Promise<String>} */
export async function Css() {
	let css = String.raw;

	return css``;
}
