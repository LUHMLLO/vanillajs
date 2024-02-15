/** @returns {Promise<String>} */
export async function ViewScripts() {
	let js = String.raw;

	return js`
        import Drops from "${
					new URL('/assets/js/drops.js', import.meta.url).href
				}";
        const drops = new Drops();
        drops.init();
    `;
}

/** @returns {Promise<String>} */
export async function ViewTemplate() {
	let html = String.raw;

	return html` <h1>4.0.4</h1> `;
}

/** @returns {Promise<String>} */
export async function ViewStyles() {
	let css = String.raw;

	return css``;
}
