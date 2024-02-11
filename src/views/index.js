export const ViewScripts = function () {
    return `
        <script src="src/assets/js/drops.js"></script>
        <script type="module" defer>
            const drops = new Drops();
            drops.init();
        </script>
    `
};

// Template component:
// This component defines the HTML structure and layout of the application.
export const ViewTemplate = function () {
    return `
        <grid max="4" demo>
            <column>
                <h1>Heading 1</h1>
            </column>

            <column>
                <h2>Heading 2</h2>
            </column>

            <column>
                <h3>Heading 3</h3>
            </column>

            <column>
                <h4>Heading 4</h4>
            </column>

            <column>
                <h5>Heading 5</h5>
            </column>

            <column>
                <h6>Heading 6</h6>
            </column>

            <column>
                <p>paragraph</p>
            </column>

            <column>
                <a href="#">link</a>
            </column>

            <column>
                <button>button</button>
            </column>

            <column>
                <figure>
                    <img src="https://cdn.dribbble.com/userupload/12939053/file/original-d6c5ee8d926b853e26254edc62319aa1.png?resize=1024x768"
                        alt="figure-img">
                </figure>
            </column>

            <column>
                <dropdown>
                    <toggle>Dropdown</toggle>
                    <dialog data-role="dropmenu" data-position="bottom">
                        <button>option 1</button>
                        <button>option 2</button>
                        <button>option 3</button>
                    </dialog>
                </dropdown>
            </column>

            <column>
                <dialog open>
                    base dialog
                </dialog>
            </column>

            <column>
                <dialog open data-variant="warning">
                    <component__header>
                        <i class="material-symbols-outlined">
                            warning
                        </i>
                    </component__header>

                    <component__body>
                        <h6>This is an important message that should be taken in consideration</h6>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat harum ex obcaecati, eius
                            aspernatur reprehenderit consequatur sequi, error et adipisci porro minus quibusdam voluptates
                            corrupti amet recusandae, ad accusamus enim! </p>
                    </component__body>

                    <component__footer>
                        <a href="{{$url}}">Go to Opportunity</a>
                    </component__footer>
                </dialog>
            </column>

            <column>
                <dialog open data-variant="onboarding">
                    <component__header>
                    </component__header>

                    <component__body>
                        <figure>
                            <img src="https://cdn.dribbble.com/userupload/4445530/file/original-e497cba23d5b8af9b696c6b0433b8338.png?resize=1024x768"
                                alt="onboard-thumbnail">
                        </figure>
                        <h6>Integration is the key</h6>
                        <p> Quaerat harum ex obcaecati, eius aspernatur reprehenderit consequatur sequi, error et adipisci
                            porro minus quibusdam voluptates
                            corrupti amet recusandae, ad accusamus enim! </p>
                        <button href="javascript:void(0)">
                            <icon>link</icon>
                            <span>Read More about integrations</span>
                            <icon>chevron_right</icon>
                        </button>
                    </component__body>

                    <component__footer>
                        <button>
                            Previous
                        </button>
                        <row>
                            <icon data-fill="true">circle</icon>
                            <icon data-fill="true" class="active">circle</icon>
                            <icon data-fill="true">circle</icon>
                            <icon data-fill="true">circle</icon>
                        </row>
                        <button>
                            Continue
                        </button>
                    </component__footer>
                </dialog>
            </column>

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

                                </toggle>
                                <dialog data-role="dropmenu" data-position="bottom" open>
                                    <button>Rename</button>
                                    <button>Clone</button>
                                    <button>Delete</button>
                                </dialog>
                            </dropdown>
                        </row>

                        <heading>
                            <span>Pack #47</span>
                        </heading>

                        <dropdown>
                            <toggle>
                                Choose Product Type
                            </toggle>
                            <dialog data-role="dropmenu" data-position="bottom">
                                <button>Energy
                                    Efficiency</button>
                                <button>Geothermal</button>
                                <button>HVAC</button>
                            </dialog>
                        </dropdown>
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
                        <button status="active">
                            <span>Active</span>
                        </button>
                        <button>
                            <icon>shopping_cart</icon>
                            <var>0</var>
                        </button>
                        <button>
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

                                </toggle>
                                <dialog data-role="dropmenu" data-position="bottom" open>
                                    <button>Rename</button>
                                    <button>Clone</button>
                                    <button>Delete</button>
                                </dialog>
                            </dropdown>
                        </row>

                        <heading>
                            <span>Pack #47</span>
                        </heading>

                        <dropdown>
                            <toggle>
                                Choose Product Type
                            </toggle>
                            <dialog data-role="dropmenu" data-position="bottom">
                                <button>Energy
                                    Efficiency</button>
                                <button>Geothermal</button>
                                <button>HVAC</button>
                            </dialog>
                        </dropdown>
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
                        <button status="active">
                            <span>Active</span>
                        </button>
                        <button>
                            <icon>shopping_cart</icon>
                            <var>0</var>
                        </button>
                        <button>
                            <span>View Proposal</span>
                            <var>0</var>
                        </button>
                    </component__footer>
                </card-v1-productpack>
            </column>

            <column>
                <card-v1-productpack mini class="active">
                    <component__header>
                        <row>
                            <tag>
                                #1845915
                            </tag>
                        </row>

                        <heading>
                            <span>Pack #54739</span>
                        </heading>

                        <dropdown disabled>
                            <toggle>
                                Energy Efficiency
                            </toggle>
                        </dropdown>
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
                        <button>
                            <icon>shopping_cart</icon>
                            <var>0</var>
                        </button>
                    </component__footer>
                </card-v1-productpack>
            </column>

            <column>
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

                        <dropdown disabled>
                            <toggle>
                                Energy Efficiency
                            </toggle>
                        </dropdown>
                    </component__header>

                    <component__body>
                        <productpack__product>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut architecto quos, vitae est illum
                                voluptates.
                            </p>
                        </productpack__product>
                    </component__body>

                    <component__footer>
                        <button>
                            <icon>shopping_cart</icon>
                            <var>0</var>
                        </button>
                    </component__footer>
                </>
            </column>
        </grid>
    `;
};

// Styles component:
// This component defines the CSS styles for the application.
export const ViewStyles = function () {
    return `
        <style>
        </style>
    `;
};