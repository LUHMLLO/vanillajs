/** @returns {Promise<String>} */
export async function ViewScripts() {
	let js = String.raw;

	return js`
    `;
}

/** @returns {Promise<string>}*/
export async function ViewTemplate() {
	let html = String.raw;

	return html` <h1>Preview</h1> `;
}

/** @returns {Promise<String>} */
export async function ViewStyles() {
	let css = String.raw;

	return css``;
}
