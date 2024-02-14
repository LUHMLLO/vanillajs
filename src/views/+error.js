/** @returns {Promise<String>} */
export async function ViewScripts() {
    return String.raw`
        import Drops from "${new URL('/assets/js/drops.js', import.meta.url).href}";
        const drops = new Drops();
        drops.init();
    `;
};

/** @returns {Promise<String>} */
export async function ViewTemplate() {
    return String.raw`
        <h1>4.0.4</h1>
    `;
};

/** @returns {Promise<String>} */
export async function ViewStyles() {
    return String.raw`
    `;
};