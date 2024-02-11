export const ViewScripts = function () {
    return `
        <script type="module" defer>
            import "src/drops/drops.js";
            const drops = new Drops();
            drops.init();
        </script>
        }
    `
}

export const ViewTemplate = function () {
    return `
        <grid max="4">
            <column>
                <card-v1-productpack>
                    <component__header>
                        <row>
                            <tag>
                                #1087561
                            </tag>
                            <dropdown>
                                <toggle>
                                    <icon>more_vert</icon>
                                    <!-- <i class="fa-regular fa-ellipsis-vertical"></i> -->
                                </toggle>
                                <dialog data-role="dropmenu" data-position="bottom">
                                    <button type="button" class="rename">Rename</button>
                                    <button type="button" class="clone">Clone</button>
                                    <button type="button" class="delete">Delete</button>
                                </dialog>
                            </dropdown>
                        </row>

                        <heading>
                            <span>Pack #47</span>
                        </heading>

                        <dropdown dropdown="product_company">
                            <toggle product-company="">
                                Choose Product Type
                            </toggle>
                            <dialog data-role="dropmenu" data-position="bottom">
                                <button type="button" class="product-company" value="energy_efficiency_product">Energy
                                    Efficiency</button>
                                <button type="button" class="product-company" value="geothermal_product">Geothermal</button>
                                <button type="button" class="product-company" value="hvac_product">HVAC</button>
                            </dialog>
                        </dropdown>
                    </component__header>

                    <component__body>
                        <productpack__product>
                            <figure>
                                <img src="_" alt="product-thumbnail">
                                <icon>imagesmode</icon>
                                <!-- <i class="fa-solid fa-image"></i> -->
                            </figure>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut architecto quos, vitae est illum
                                voluptates.
                            </p>
                        </productpack__product>
                        <productpack__product>
                            <figure>
                                <img src="_" alt="product-thumbnail">
                                <icon>imagesmode</icon>
                                <!-- <i class="fa-solid fa-image"></i> -->
                            </figure>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut architecto quos, vitae est illum
                                voluptates.
                            </p>
                        </productpack__product>
                        <productpack__product>
                            <figure>
                                <img src="_" alt="product-thumbnail">
                                <icon>imagesmode</icon>
                                <!-- <i class="fa-solid fa-image"></i> -->
                            </figure>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut architecto quos, vitae est illum
                                voluptates.
                            </p>
                        </productpack__product>
                        <productpack__product>
                            <figure>
                                <img src="_" alt="product-thumbnail">
                                <icon>imagesmode</icon>
                                <!-- <i class="fa-solid fa-image"></i> -->
                            </figure>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut architecto quos, vitae est illum
                                voluptates.
                            </p>
                        </productpack__product>
                    </component__body>

                    <component__footer>
                        <button status="active">
                            <span>Active</span>
                        </button>
                        <button interactive class="product-count">
                            <icon>shopping_cart</icon>
                            <!-- <i class="fa-solid fa-cart-shopping"></i> -->
                            <var>0</var>
                        </button>
                        <button interactive class="view-proposals">
                            <span>View Proposal</span>
                            <var>0</var>
                        </button>
                    </component__footer>
                </card-v1-productpack>
            </column>

            <column>
                <card-v1-productpack class="active">
                    <component__header>
                        <row>
                            <tag>
                                #1087561
                            </tag>
                            <dropdown>
                                <toggle>
                                    <icon>more_vert</icon>
                                    <!-- <i class="fa-regular fa-ellipsis-vertical"></i> -->
                                </toggle>
                                <dialog data-role="dropmenu" data-position="bottom">
                                    <button type="button" class="rename">Rename</button>
                                    <button type="button" class="clone">Clone</button>
                                    <button type="button" class="delete">Delete</button>
                                </dialog>
                            </dropdown>
                        </row>

                        <heading>
                            <span>Pack #47</span>
                        </heading>

                        <dropdown dropdown="product_company">
                            <toggle product-company="">
                                Choose Product Type
                            </toggle>
                            <dialog data-role="dropmenu" data-position="bottom">
                                <button type="button" class="product-company" value="energy_efficiency_product">Energy
                                    Efficiency</button>
                                <button type="button" class="product-company" value="geothermal_product">Geothermal</button>
                                <button type="button" class="product-company" value="hvac_product">HVAC</button>
                            </dialog>
                        </dropdown>
                    </component__header>

                    <component__body>
                        <productpack__product>
                            <figure>
                                <img src="_" alt="product-thumbnail">
                                <icon>imagesmode</icon>
                                <!-- <i class="fa-solid fa-image"></i> -->
                            </figure>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut architecto quos, vitae est illum
                                voluptates.
                            </p>
                        </productpack__product>
                        <productpack__product>
                            <figure>
                                <img src="_" alt="product-thumbnail">
                                <icon>imagesmode</icon>
                                <!-- <i class="fa-solid fa-image"></i> -->
                            </figure>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut architecto quos, vitae est illum
                                voluptates.
                            </p>
                        </productpack__product>
                        <productpack__product>
                            <figure>
                                <img src="_" alt="product-thumbnail">
                                <icon>imagesmode</icon>
                                <!-- <i class="fa-solid fa-image"></i> -->
                            </figure>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut architecto quos, vitae est illum
                                voluptates.
                            </p>
                        </productpack__product>
                        <productpack__product>
                            <figure>
                                <img src="_" alt="product-thumbnail">
                                <icon>imagesmode</icon>
                                <!-- <i class="fa-solid fa-image"></i> -->
                            </figure>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut architecto quos, vitae est illum
                                voluptates.
                            </p>
                        </productpack__product>
                    </component__body>

                    <component__footer>
                        <button status="active">
                            <span>Active</span>
                        </button>
                        <button interactive class="product-count">
                            <icon>shopping_cart</icon>
                            <!-- <i class="fa-solid fa-cart-shopping"></i> -->
                            <var>0</var>
                        </button>
                        <button interactive class="view-proposals">
                            <span>View Proposal</span>
                            <var>0</var>
                        </button>
                    </component__footer>
                </card-v1-productpack>
            </column>
        </grid>
    `
}

export const ViewStyles = function () {
    return `
        <style>
        </style>
    `;
};