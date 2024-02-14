import { CSSResult, css, html, render } from "lit";

/** @returns {String} */
export function ViewScripts() {
    return `
    `;
};

/** @param {HTMLElement} container */
export async function ViewTemplate(container) {
    console.log('ViewTemplate Container', container);
    render(html`
        <h1>Proposal</h1>
    `, container);
};

/** @returns {CSSResult} */
export function ViewStyles() {
    return css`
    `;
};