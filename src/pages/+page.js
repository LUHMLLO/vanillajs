import Page from '~lib/packages/pager/@';

export const page = new Page();

page.SEO({
	icon: '',
	author: 'lm',
	description: 'Vanilla JS - Start Page',
	image: '',
	keywords: [''],
	title: 'Start',
});

let js = String.raw;
page.JS(js`
	import "/assets/js/lit/index.js"
	import Drops from "/assets/js/drops.js";
	const drops = new Drops();
`);

let html = String.raw;
page.HTML(html`
	<grid max="4" demo>
		<column>
			<lm-radio
				label="This Radio contains an input(text)"
				group="radio-component-showcase"
				checked>
				<input type="text" name="" id="" />
			</lm-radio>
			<lm-radio
				label="This Radio contains a textarea"
				group="radio-component-showcase">
				<textarea name="" id="" cols="30" rows="10"></textarea>
			</lm-radio>
		</column>
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
				<text>link</text>
				<icon>chevron_right</icon>
			</a>
		</column>

		<column>
			<button type="button">
				<icon>link</icon>
				<text>button</text>
				<icon>chevron_right</icon>
			</button>
		</column>

		<column>
			<figure>
				<img
					src="https://cdn.dribbble.com/userupload/12939053/file/original-d6c5ee8d926b853e26254edc62319aa1.png?resize=1024x768"
					alt="figure-img" />
			</figure>
		</column>

		<column>
			<input
				id="example-input-text"
				type="text"
				placeholder="example input text (because of accessibility that's why)" />
		</column>

		<column>
			<textarea
				id="example-textarea"
				type="text"
				placeholder="example input text (because of accessibility that's why)"></textarea>
		</column>

		<column>
			<select title="pets" name="pets" id="pet-select">
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
				<label for="example-input-field">label</label>
				<input id="example-input-field" type="text" />
			</field>
		</column>

		<column>
			<field>
				<label for="example-textarea-field">label</label>
				<textarea id="example-textarea-field"></textarea>
			</field>
		</column>

		<column>
			<field>
				<label for="pet2-select">label</label>
				<select title="pets" name="pets2" id="pet2-select">
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
					<text>Dropdown</text>
					<icon>expand_more</icon>
				</toggle>
				<dialog data-role="dropmenu" data-position="bottom">
					<button type="button" data-trigger="close">
						this will trigger a close
					</button>
					<button type="button">option 2</button>
					<button type="button">option 3</button>
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
					<button type="button">call to action</button>
				</component__footer>
			</dialog>
		</column>

		<column>
			<dialog open data-variant="warning">
				<component__header>
					<icon> warning </icon>
					<icon> close </icon>
				</component__header>

				<component__body>
					<h6>
						This is an important message that should be taken in consideration
					</h6>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
						harum ex obcaecati, eius aspernatur reprehenderit consequatur sequi,
						error et adipisci porro minus quibusdam voluptates corrupti amet
						recusandae, ad accusamus enim!
					</p>
				</component__body>

				<component__footer>
					<button type="button">Call to action</button>
					<button data-variant="primary">Call to action</button>
				</component__footer>
			</dialog>
		</column>

		<column>
			<dialog open data-variant="onboarding">
				<component__header>
					<icon> dialogs </icon>
					<icon> close </icon>
				</component__header>

				<component__body>
					<figure>
						<img
							src="https://cdn.dribbble.com/userupload/4445530/file/original-e497cba23d5b8af9b696c6b0433b8338.png?resize=1024x768"
							alt="onboard-thumbnail" />
					</figure>
					<h6>Integration is the key</h6>
					<p>
						Quaerat harum ex obcaecati, eius aspernatur reprehenderit
						consequatur sequi, error et adipisci porro minus quibusdam
						voluptates corrupti amet recusandae, ad accusamus enim!
					</p>
					<button type="button">
						<icon>link</icon>
						<text>Read More about integrations</text>
						<icon>chevron_right</icon>
					</button>
				</component__body>

				<component__footer>
					<button type="button">Previous</button>
					<row>
						<icon data-fill="true">circle</icon>
						<icon data-fill="true" class="active">circle</icon>
						<icon data-fill="true">circle</icon>
						<icon data-fill="true">circle</icon>
					</row>
					<button type="button">Continue</button>
				</component__footer>
			</dialog>
		</column>

		<column>
			<card data-variant="productpack">
				<component__header>
					<row>
						<tag> #1087561 </tag>
						<dropdown>
							<toggle>
								<icon>more_vert</icon>
							</toggle>
							<dialog data-role="dropmenu" data-position="bottom" open>
								<button type="button" data-trigger="close">Rename</button>
								<button type="button" data-trigger="close">Clone</button>
								<button type="button" data-trigger="close">Delete</button>
							</dialog>
						</dropdown>
					</row>

					<heading>
						<span>Pack #47</span>
					</heading>

					<dropdown>
						<toggle> Choose Product Type </toggle>
						<dialog data-role="dropmenu" data-position="bottom">
							<button type="button" data-trigger="close">
								Energy Efficiency
							</button>
							<button type="button" data-trigger="close">Geothermal</button>
							<button type="button" data-trigger="close">HVAC</button>
						</dialog>
					</dropdown>
				</component__header>

				<component__body>
					<productpack__product>
						<figure>
							<img src="_" alt="product-thumbnail" />
							<icon>imagesmode</icon>
						</figure>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
							architecto quos, vitae est illum voluptates.
						</p>
					</productpack__product>
					<productpack__product>
						<figure>
							<img src="_" alt="product-thumbnail" />
							<icon>imagesmode</icon>
						</figure>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
							architecto quos, vitae est illum voluptates.
						</p>
					</productpack__product>
					<productpack__product>
						<figure>
							<img src="_" alt="product-thumbnail" />
							<icon>imagesmode</icon>
						</figure>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
							architecto quos, vitae est illum voluptates.
						</p>
					</productpack__product>
					<productpack__product>
						<figure>
							<img src="_" alt="product-thumbnail" />
							<icon>imagesmode</icon>
						</figure>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
							architecto quos, vitae est illum voluptates.
						</p>
					</productpack__product>
				</component__body>

				<component__footer>
					<button type="button" status="active">
						<span>Active</span>
					</button>
					<button type="button">
						<icon>shopping_cart</icon>
						<var>0</var>
					</button>
					<button type="button">
						<span>View Proposal</span>
						<var>0</var>
					</button>
				</component__footer>
			</card>
		</column>

		<column>
			<card data-variant="productpack" class="active">
				<component__header>
					<row>
						<tag> #1087561 </tag>
						<dropdown>
							<toggle>
								<icon>more_vert</icon>
							</toggle>
							<dialog data-role="dropmenu" data-position="bottom" open>
								<button type="button" data-trigger="close">Rename</button>
								<button type="button" data-trigger="close">Clone</button>
								<button type="button" data-trigger="close">Delete</button>
							</dialog>
						</dropdown>
					</row>

					<heading>
						<span>Pack #47</span>
					</heading>

					<dropdown>
						<toggle> Choose Product Type </toggle>
						<dialog data-role="dropmenu" data-position="bottom">
							<button type="button" data-trigger="close">
								Energy Efficiency
							</button>
							<button type="button" data-trigger="close">Geothermal</button>
							<button type="button" data-trigger="close">HVAC</button>
						</dialog>
					</dropdown>
				</component__header>

				<component__body>
					<productpack__product>
						<figure>
							<img src="_" alt="product-thumbnail" />
							<icon>imagesmode</icon>
						</figure>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
							architecto quos, vitae est illum voluptates.
						</p>
					</productpack__product>
					<productpack__product>
						<figure>
							<img src="_" alt="product-thumbnail" />
							<icon>imagesmode</icon>
						</figure>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
							architecto quos, vitae est illum voluptates.
						</p>
					</productpack__product>
					<productpack__product>
						<figure>
							<img src="_" alt="product-thumbnail" />
							<icon>imagesmode</icon>
						</figure>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
							architecto quos, vitae est illum voluptates.
						</p>
					</productpack__product>
					<productpack__product>
						<figure>
							<img src="_" alt="product-thumbnail" />
							<icon>imagesmode</icon>
						</figure>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
							architecto quos, vitae est illum voluptates.
						</p>
					</productpack__product>
				</component__body>

				<component__footer>
					<button type="button" status="active">
						<span>Active</span>
					</button>
					<button type="button">
						<icon>shopping_cart</icon>
						<var>0</var>
					</button>
					<button type="button">
						<span>View Proposal</span>
						<var>0</var>
					</button>
				</component__footer>
			</card>
		</column>

		<column>
			<card data-variant="productpack" mini class="active">
				<component__header>
					<row>
						<tag> #1845915 </tag>
					</row>

					<heading>
						<span>Pack #54739</span>
					</heading>

					<dropdown disabled>
						<toggle> Energy Efficiency </toggle>
					</dropdown>
				</component__header>

				<component__body>
					<productpack__product>
						<figure>
							<img src="_" alt="product-thumbnail" />
							<icon>imagesmode</icon>
						</figure>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
							architecto quos, vitae est illum voluptates.
						</p>
					</productpack__product>
				</component__body>

				<component__footer>
					<button type="button">
						<icon>shopping_cart</icon>
						<var>0</var>
					</button>
				</component__footer>
			</card>
		</column>

		<column>
			<card data-variant="productpack" mini>
				<component__header>
					<row>
						<tag> #1845915 </tag>
					</row>

					<heading>
						<span>Pack #54739</span>
					</heading>

					<dropdown disabled>
						<toggle> Energy Efficiency </toggle>
					</dropdown>
				</component__header>

				<component__body>
					<productpack__product>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
							architecto quos, vitae est illum voluptates.
						</p>
					</productpack__product>
				</component__body>

				<component__footer>
					<button type="button">
						<icon>shopping_cart</icon>
						<var>0</var>
					</button>
				</component__footer>
			</card>
		</column>
	</grid>
`);

let css = String.raw;
page.CSS(css``);
