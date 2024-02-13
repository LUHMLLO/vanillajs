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
    return render(html`
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
                <a href="#">
                    <icon>link</icon>
                    link
                    <icon>chevron_right</icon>
                </a>
            </column>
        
            <column>
                <button>
                    <icon>link</icon>
                    button
                    <icon>chevron_right</icon>
                </button>
            </column>
        
            <column>
                <figure>
                    <img src="https://cdn.dribbble.com/userupload/12939053/file/original-d6c5ee8d926b853e26254edc62319aa1.png?resize=1024x768"
                        alt="figure-img">
                </figure>
            </column>

            <column>
                <input type="text"/>
            </column>

            <column>
                <textarea></textarea>
            </column>

            <column>
                <select name="pets" id="pet-select">
                    <option value="">--Please choose an option--</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="hamster">Hamster</option>
                    <option value="parrot">Parrot</option>
                    <option value="spider">Spider</option>
                    <option value="goldfish">Goldfish</option>
                </select>
            </column>

            <column>
                <field>
                    <label>label</label>
                    <input type="text" />
                </field>
            </column>

            <column>
                <field>
                    <label>label</label>
                    <textarea></textarea>
                </field>
            </column>

            <column>
                <field>
                    <label>label</label>
                    <select name="pets" id="pet-select">
                        <option value="">--Please choose an option--</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="hamster">Hamster</option>
                        <option value="parrot">Parrot</option>
                        <option value="spider">Spider</option>
                        <option value="goldfish">Goldfish</option>
                    </select>
                </field>
            </column>
        
            <column>
                <dropdown>
                    <toggle>                        
                        <icon>dropdown</icon>
                        Dropdown
                        <icon>expand_more</icon>
                    </toggle>
                    <dialog data-role="dropmenu" data-position="bottom">
                        <button>option 1</button>
                        <button>option 2</button>
                        <button>option 3</button>
                    </dialog>
                </dropdown>
            </column>
        
            <column>
                <dialog open>
                    <component__header>
                        <small>dialog header</small>
                        <icon>close</icon>
                    </component__header>
                    <component__body>
                        <small>dialog body</small>
                    </component__body>
                    <component__footer>
                        <small>dialog footer</small>
                        <button>call to action</button>
                    </component__footer>
                </dialog>
            </column>
        
            <column>
                <dialog open data-variant="warning">
                    <component__header>
                        <icon>
                            warning
                        </icon>
                        <icon>
                            close
                        </icon>
                    </component__header>
        
                    <component__body>
                        <h6>This is an important message that should be taken in consideration</h6>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat harum ex obcaecati, eius
                            aspernatur reprehenderit consequatur sequi, error et adipisci porro minus quibusdam voluptates
                            corrupti amet recusandae, ad accusamus enim! </p>
                    </component__body>
        
                    <component__footer>
                        <button>Call to action</button>
                        <button data-variant="primary">Call to action</button>
                    </component__footer>
                </dialog>
            </column>
        
            <column>
                <dialog open data-variant="onboarding">
                    <component__header>
                        <icon>
                            dialogs
                        </icon>
                        <icon>
                            close
                        </icon>
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
                </card-v1-productpack>
            </column>
        </grid>
    `, container);
}


/** @returns {CSSResult} */
export function ViewStyles() {
    return css`
    `;
};