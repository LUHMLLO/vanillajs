import { CSSResult, css } from "lit";

/** @returns {String} */
export function ViewScripts() {
    return `
        import Drops from "${new URL('/assets/js/drops.js', import.meta.url).href}";
        const drops = new Drops();
        drops.init();
    `;
};

/** @returns {Promise<String>} */
export async function ViewTemplate() {
    return String.raw`
        <h1>preview page</h1>
        <column id="previewer"></column>
    `;
};

/** @returns {CSSResult} */
export function ViewStyles() {
    return css`
    `;
};