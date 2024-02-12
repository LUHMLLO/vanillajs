export const ViewScripts = function () {
    return `
        const miniatures = document.getElementById('miniatures');

        for (let index = 0; index < 6; index++) {
            const card = document.querySelector("productpack[mini]").cloneNode(true);
            miniatures.appendChild(card);
        }
    `
}



export const ViewTemplate = function () {
    return `<scrollable-x id="miniatures">
    <card-v1-productpack mini>
        <component__header>
            <row>
                <tag>
                    #1845915
                </tag>
            </row>

            <heading>
                <span>Pack #54739</span>
            </heading>

        </component__header>

        <component__body>
            <productpack__product>
                <figure>
                    <img src="_" alt="product-thumbnail">
                        <icon>imagesmode</icon>
                </figure>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut architecto quos, vitae est illum
                    voluptates.
                </p>
            </productpack__product>
        </component__body>

        <component__footer>
            <button interactive class="product-count">
                <icon>shopping_cart</icon>
                <var>0</var>
            </button>
        </component__footer>
    </card-v1-productpack>
</scrollable-x>`
}


export const ViewStyles = function () {
    return `
    `
}