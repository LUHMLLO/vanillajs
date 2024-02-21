class ThemeSchemes {
  constructor(defaultScheme = "auto") {
    this.defaultScheme = defaultScheme;
    this.themes = ["auto", "light", "dark"];
  }
  /**
   * Load the selected theme from localStorage or set a default one.
   */
  load() {
    this.set(
      this.themes.find(
        (theme) => theme === localStorage.getItem("themeScheme")
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
    const theme = this.themes.find((theme2) => theme2 === scheme);
    localStorage.setItem("themeScheme", scheme);
    this._updateDom(theme);
  }
  /**
   * Apply the theme properties to the document HTML element.
   * @param {String | undefined} theme Theme object with CSS variable or class names
   */
  _updateDom(theme) {
    const html = document.querySelector("html");
    if (!html) {
      return;
    }
    html.setAttribute("scheme", String(theme));
  }
}
export {
  ThemeSchemes as default
};
