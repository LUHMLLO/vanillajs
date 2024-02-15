/**
 * @description A library for creating and managing persistent theme schemes.
 * @class
 */
export default class ThemeSchemes {
	constructor(defaultScheme = 'auto') {
		this.defaultScheme = defaultScheme;
		this.themes = ['auto', 'light', 'dark'];
	}

	/**
	 * Load the selected theme from localStorage or set a default one.
	 */
	load() {
		this.set(
			this.themes.find(
				(theme) => theme === localStorage.getItem('themeScheme')
			) || this.defaultScheme
		);
	}

	/**
	 * Set the active theme and apply it to the document.
	 * @param {String} scheme Name of the theme to apply
	 */
	set(scheme) {
		if (!this.themes.includes(scheme)) {
			throw new Error(`Invalid theme: ${scheme}`);
		}

		const theme = this.themes.find((theme) => theme === scheme);
		localStorage.setItem('themeScheme', scheme);
		this._updateDom(theme);
	}

	/**
	 * Apply the theme properties to the document HTML element.
	 * @param {Object} theme Theme object with CSS variable or class names
	 */
	_updateDom(theme) {
		const html = document.querySelector('html');
		if (!html) {
			console.warn('HTML element not found');
			return;
		}

		html.setAttribute('scheme', theme);
	}
}
