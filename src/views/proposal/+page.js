import { CSSResult, css } from "lit";

/** @returns {String} */
export function ViewScripts() {
    return `
    `;
};

/** @returns {Promise<string>}*/
export async function ViewTemplate() {
    return String.raw`
        <h1>Proposal</h1>
    `;
};

/** @returns {CSSResult} */
export function ViewStyles() {
    return css`
    `;
};