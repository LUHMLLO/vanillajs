import { CSSResult, css, html, render } from "lit";

/** @returns {String} */
export function ViewScripts() {
    return `
        import Drops from "${new URL('/assets/js/drops.js', import.meta.url).href}";
        const drops = new Drops();
        drops.init();
    `;
};

/** @param {HTMLElement} container */
export async function ViewTemplate(container) {
    console.log('ViewTemplate Container', container);
    render(html`
        <h1>4.0.4</h1>
    `, container);
};

/** @returns {CSSResult} */
export function ViewStyles() {
    return css`
    `;
};