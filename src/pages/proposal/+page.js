import Page from '~lib/packages/pager/@';

export const page = new Page();

page.SEO({
	icon: '/assets/img/gizmo.svg',
	author: 'lm',
	description: 'Vanilla JS - Proposal Tool Demo Page',
	image: '',
	keywords: [''],
	title: 'Proposal Tool - Demo',
});

let js = String.raw;
page.JS(js`
	import Drops from "/assets/js/drops.js";
	import ThemeSchemes from '/assets/js/themeSchemes.js';

	const drops = new Drops();

	window.themeHandler = new ThemeSchemes();
	themeHandler.load();
`);

let html = String.raw;
page.HTML(html`
	<workspace>
		<workspace__header>
			<row class="align --center gap --5xs">
				<figure data-variant="logo">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 495.47 495.47"
						fill="currentColor">
						<path
							d="m247.73,97.57c-82.94,0-150.17,67.23-150.17,150.17s67.23,150.17,150.17,150.17,150.17-67.23,150.17-150.17-67.23-150.17-150.17-150.17Zm96.45,164.83c-.4,2.49-.92,5.01-1.5,7.52-.58,2.51-1.23,5.01-2.54,8.72-1.31,3.71-3.29,8.64-5.7,13.34-2.41,4.71-5.26,9.2-8.46,13.46-3.2,4.26-6.77,8.3-10.65,12.02-3.88,3.72-8.05,7.12-12.44,10.13-13.76,9.43-28.84,14.62-43.46,16.36-14.45,1.71-28.89.49-43.17-4.45-4.53-1.56-8.97-3.47-13.25-5.68-4.28-2.22-8.4-4.74-12.33-7.58-3.94-2.84-7.69-6-11.2-9.42-3.51-3.42-6.76-7.09-9.7-10.96-9.39-12.4-14.95-25.62-17.79-38.72-1.03-4.58-1.84-9.22-1.98-16.34-.15-7.12.36-16.73,2.41-26.02,2.06-9.28,5.66-18.24,10.54-26.68,4.87-8.44,11.01-16.35,18.33-22.94,7.31-6.59,15.79-11.85,20.7-14.61,4.9-2.76,6.23-3.02,7.55-3.19,3.72-.56,7.9.11,11.62,3.42,1.24,1.14,2.52,2.72,3.32,4.5.8,1.78,1.12,3.78,1.22,5.21.05,3.39-.29,3.93-1.12,6.08-.53,1.19-1.4,2.71-2.57,3.95-1.17,1.24-2.63,2.2-5.34,3.72-2.72,1.52-6.69,3.61-10.32,6.18-3.64,2.57-6.94,5.62-9.99,8.9-3.06,3.28-5.87,6.79-8.66,11.5-2.78,4.72-5.53,10.64-7.35,16.84-3.51,12.05-3.65,25.37-.15,37.99,1.7,6.12,4.24,12.01,7.59,17.51,3.35,5.5,7.51,10.62,12.3,15.07,4.78,4.44,10.2,8.22,15.99,11.16,11.69,5.96,24.81,8.37,37.54,7.3,6.43-.54,12.79-1.95,18.78-4.28,5.99-2.34,11.6-5.61,15.67-8.4,4.07-2.79,6.59-5.11,8.99-7.55,2.39-2.44,4.65-5,6.68-7.69,15.51-21.63,17.53-44.04,9.31-66.94-1.21-3.28-2.61-6.5-5.44-11.03-2.82-4.54-7.06-10.39-12.29-15.14-5.24-4.75-11.46-8.4-14.95-10.43-3.5-2.03-4.28-2.44-5.01-2.93-.73-.49-1.41-1.06-2.25-2.07-1.76-1.93-3.53-5.73-3.47-8.91-.05-2.81.61-5.2,2.14-7.68.72-1.12,1.64-2.17,2.68-3.08,2.33-2.12,5.78-3.32,9.35-3.36,2,0,4.01.44,7.69,2.27,3.69,1.82,9.06,5.03,14.09,8.71,9.93,7.14,18.81,17.22,24.74,26.55,5.87,9.24,8.92,17.06,11.51,25.73,1.27,4.4,2.23,8.9,2.82,13.45.57,4.55.78,9.14.79,12.67,0,6.88-.53,10.69-1.29,15.85Zm-96.45-14.34c-7.03,0-12.73-5.7-12.73-12.73v-79.79c0-7.03,5.7-12.73,12.73-12.73s12.73,5.7,12.73,12.73v79.79c0,7.03-5.7,12.73-12.73,12.73Z" />
						<g>
							<path
								d="m227.69,418.73c6.67,25.58,13.35,51.16,20.04,76.74,6.68-25.58,13.36-51.16,20.05-76.74-6.58.76-13.26,1.2-20.05,1.2s-13.47-.44-20.05-1.2Z" />
							<path
								d="m267.8,76.75c-6.69-25.58-13.38-51.16-20.06-76.75-6.67,25.58-13.36,51.16-20.07,76.75,6.59-.76,13.27-1.2,20.06-1.2s13.48.44,20.06,1.2Z" />
							<path
								d="m342.53,476.61c-3.62-26.18-7.23-52.37-10.84-78.56-11.59,6.48-24,11.65-37.04,15.34,15.95,21.08,31.91,42.15,47.87,63.22Z" />
							<path
								d="m152.93,18.86c3.62,26.18,7.23,52.37,10.83,78.56,11.59-6.49,24.01-11.66,37.06-15.35-15.97-21.07-31.93-42.14-47.89-63.21Z" />
							<path
								d="m354.45,382.81c22.81,13.37,45.63,26.74,68.45,40.1-13.37-22.82-26.73-45.63-40.09-68.46-8.32,10.52-17.84,20.04-28.36,28.36Z" />
							<path
								d="m141.03,112.65c-22.82-13.36-45.65-26.72-68.46-40.09,13.37,22.81,26.73,45.64,40.09,68.47,8.33-10.53,17.85-20.05,28.38-28.38Z" />
							<path
								d="m476.61,342.54c-21.07-15.96-42.14-31.92-63.21-47.88-3.69,13.04-8.86,25.45-15.34,37.04,26.18,3.62,52.36,7.24,78.55,10.85Z" />
							<path
								d="m18.86,152.93c21.08,15.95,42.14,31.92,63.21,47.89,3.69-13.05,8.86-25.47,15.35-37.06-26.19-3.61-52.37-7.21-78.56-10.84Z" />
							<path
								d="m418.73,267.78c25.58-6.67,51.16-13.35,76.74-20.04-25.58-6.68-51.16-13.36-76.74-20.05.76,6.58,1.2,13.26,1.2,20.05s-.44,13.47-1.2,20.05Z" />
							<path
								d="m76.75,227.67c-25.58,6.69-51.16,13.38-76.75,20.06,25.58,6.67,51.16,13.36,76.75,20.07-.76-6.59-1.2-13.27-1.2-20.06s.44-13.48,1.2-20.06Z" />
							<path
								d="m476.61,152.94c-26.18,3.62-52.37,7.23-78.56,10.84,6.48,11.59,11.65,24,15.34,37.04,21.08-15.95,42.15-31.91,63.22-47.87Z" />
							<path
								d="m18.86,342.53c26.18-3.62,52.37-7.23,78.56-10.83-6.49-11.59-11.66-24.01-15.35-37.06-21.07,15.97-42.14,31.93-63.21,47.89Z" />
							<path
								d="m382.81,141.02c13.37-22.81,26.74-45.63,40.1-68.45-22.82,13.37-45.63,26.73-68.46,40.09,10.52,8.32,20.04,17.84,28.36,28.36Z" />
							<path
								d="m112.65,354.44c-13.36,22.82-26.72,45.65-40.09,68.46,22.81-13.37,45.64-26.73,68.47-40.09-10.53-8.33-20.05-17.85-28.38-28.38Z" />
							<path
								d="m342.54,18.86c-15.96,21.07-31.92,42.14-47.88,63.21,13.04,3.69,25.45,8.86,37.04,15.34,3.62-26.18,7.24-52.36,10.85-78.55Z" />
							<path
								d="m152.93,476.61c15.95-21.08,31.92-42.14,47.89-63.21-13.05-3.69-25.47-8.86-37.06-15.35-3.61,26.19-7.21,52.37-10.84,78.56Z" />
						</g>
					</svg>
				</figure>

				<h6>Proposals by Gizmo</h6>
			</row>
			<row class="align --center gap --5xs justify --center">
				<stepper class="grow">
					<step>
						<var>1</var>
						<span>step</span>
					</step>
					<step>
						<var>2</var>
						<span>step</span>
					</step>
					<step>
						<var>3</var>
						<span>step</span>
					</step>
					<step>
						<var>4</var>
						<span>step</span>
					</step>
					<step>
						<var>5</var>
						<span>step</span>
					</step>
				</stepper>
			</row>
			<row class="align --center gap --5xs justify --end">
				<dropdown data-variant="wrapper">
					<toggle>
						<figure data-variant="avatar">
							<img
								src="https://cdn.dribbble.com/users/18463/screenshots/15871576/media/2e14cdbe675f060297cc0b232f7712c5.png"
								alt="avatar-thumbnail" />
						</figure>
					</toggle>
					<dialog data-role="dropmenu" data-position="bottom">
						<button type="button" onclick="themeHandler.set('auto')">
							set theme auto
						</button>
						<button type="button" onclick="themeHandler.set('light')">
							set theme light
						</button>
						<button type="button" onclick="themeHandler.set('dark')">
							set theme dark
						</button>
					</dialog>
				</dropdown>
			</row>
		</workspace__header>

		<workspace__body>
			<workspace__sidebar>
				<column class="gap --5xs">
					<h6>Quick Actions</h6>
					<button
						type="button"
						onclick="document.querySelector('#dialogTest').showModal()">
						<icon> search </icon>
						<text>Search</text>
					</button>
					<button type="button">
						<icon> add </icon>
						<text>Call to action</text>
					</button>
					<button type="button">
						<icon> add </icon>
						<text>Call to action</text>
					</button>
				</column>

				<details data-variant="folder-tree" open>
					<summary>
						<icon> folder_open </icon>
						<text>Modules</text>
						<icon> expand_more </icon>
					</summary>

					<column class="gap --5xs">
						<a href="javascript:void(0)">
							<icon> article </icon>
							<text>Customer information</text>
						</a>
						<a href="javascript:void(0)">
							<icon> article </icon>
							<text>System Equipment</text>
						</a>
						<a href="javascript:void(0)">
							<icon> article </icon>
							<text>Project Adders</text>
						</a>
						<a>
							<icon> article </icon>
							<text>Additional Work</text>
						</a>
						<a href="javascript:void(0)">
							<icon> article </icon>
							<text>Additional Projects</text>
						</a>
						<a href="javascript:void(0)">
							<icon> article </icon>
							<text>Internal Sale Notes</text>
						</a>
						<a href="javascript:void(0)">
							<icon> article </icon>
							<text>Financial</text>
						</a>
					</column>
				</details>

				<details data-variant="folder-tree">
					<summary>
						<icon> folder_open </icon>
						<text>Modules</text>
						<icon> expand_more </icon>
					</summary>

					<column class="gap --5xs">
						<a href="javascript:void(0)">
							<icon> article </icon>
							<text>Customer information</text>
						</a>
						<a href="javascript:void(0)">
							<icon> article </icon>
							<text>System Equipment</text>
						</a>
						<a href="javascript:void(0)">
							<icon> article </icon>
							<text>Project Adders</text>
						</a>
						<a>
							<icon> article </icon>
							<text>Additional Work</text>
						</a>
						<a href="javascript:void(0)">
							<icon> article </icon>
							<text>Additional Projects</text>
						</a>
						<a href="javascript:void(0)">
							<icon> article </icon>
							<text>Internal Sale Notes</text>
						</a>
						<a href="javascript:void(0)">
							<icon> article </icon>
							<text>Financial</text>
						</a>
					</column>
				</details>

				<details data-variant="folder-tree">
					<summary>
						<icon> folder_open </icon>
						<text>Modules</text>
						<icon> expand_more </icon>
					</summary>

					<column class="gap --5xs">
						<a href="javascript:void(0)">
							<icon> article </icon>
							<text>Customer information</text>
						</a>
						<a href="javascript:void(0)">
							<icon> article </icon>
							<text>System Equipment</text>
						</a>
						<a href="javascript:void(0)">
							<icon> article </icon>
							<text>Project Adders</text>
						</a>
						<a>
							<icon> article </icon>
							<text>Additional Work</text>
						</a>
						<a href="javascript:void(0)">
							<icon> article </icon>
							<text>Additional Projects</text>
						</a>
						<a href="javascript:void(0)">
							<icon> article </icon>
							<text>Internal Sale Notes</text>
						</a>
						<a href="javascript:void(0)">
							<icon> article </icon>
							<text>Financial</text>
						</a>
					</column>
				</details>
			</workspace__sidebar>

			<workspace__content>
				<section class="flow-content">
					<h2>Section name</h2>
					<hr />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</section>
				<section class="flow-content">
					<h2>Section name</h2>
					<hr />
					<row class="gap --2xl">
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
					</row>
				</section>
				<section class="flow-content">
					<h2>Section name</h2>
					<hr />
					<grid max="4" style="--gap: var(--scale-2xl)">
						<fieldset class="gap --2xl">
							<field>
								<label>label</label>
								<input type="text" />
							</field>
							<field>
								<label>label</label>
								<input type="text" />
							</field>
						</fieldset>

						<fieldset class="gap --2xl">
							<field>
								<label>label</label>
								<input type="text" />
							</field>
							<field>
								<label>label</label>
								<input type="text" />
							</field>
						</fieldset>

						<fieldset class="gap --2xl">
							<field>
								<label>label</label>
								<input type="text" />
							</field>
							<field>
								<label>label</label>
								<input type="text" />
							</field>
						</fieldset>

						<fieldset class="gap --2xl">
							<field>
								<label>label</label>
								<input type="text" />
							</field>
							<field>
								<label>label</label>
								<input type="text" />
							</field>
						</fieldset>
					</grid>
				</section>
			</workspace__content>

			<workspace__sidebar>
				<column class="gap --5xs">
					<h6>Place Holder Title</h6>
					<p>....</p>
				</column>

				<details data-variant="folder-tree">
					<summary>
						<text>Place Holder</text>
						<icon> expand_more </icon>
					</summary>

					<column class="gap --5xs">
						<p>....</p>
					</column>
				</details>

				<details data-variant="folder-tree">
					<summary>
						<text>Place Holder</text>
						<icon> expand_more </icon>
					</summary>

					<column class="gap --5xs">
						<p>....</p>
					</column>
				</details>

				<details data-variant="folder-tree">
					<summary>
						<text>Place Holder</text>
						<icon> expand_more </icon>
					</summary>

					<column class="gap --5xs">
						<p>....</p>
					</column>
				</details>
			</workspace__sidebar>
		</workspace__body>

		<workspace__footer> workspace footer </workspace__footer>
	</workspace>

	<overlays>
		<dialog id="dialogTest">
			<component__header class="justify --end">
				<icon
					class="cursor --pointer"
					onclick="document.querySelector('#dialogTest').close()"
					>close</icon
				>
			</component__header>
			<component__body>
				<field
					data-variant="command-palette-search"
					class="grow"
					style="--c-background: var(--clr-secondary)">
					<icon> search </icon>
					<input
						type="text"
						placeholder="Type to search . . ."
						style="--c-background: transparent;" />
					<icon> filter_alt </icon>
				</field>
			</component__body>
			<component__footer> </component__footer>
		</dialog>
	</overlays>
`);

let css = String.raw;
page.CSS(css`
	html,
	body,
	#app {
		display: contents;
	}

	workspace,
	overlays {
		display: grid;
		height: 100dvh;
		inset: 0;
		isolation: isolate;
		margin: auto;
		overflow: clip;
		place-content: center;
		position: fixed;
		width: 100dvw;
	}

	workspace {
		grid-template-columns: 1fr;
		grid-template-rows: max-content 1fr max-content;
		z-index: 1;

		> * {
			width: 100%;
		}

		> workspace__header {
			align-items: center;

			border-bottom: solid 0.125rem var(--clr-primary);

			display: flex;
			height: calc(var(--scale-5xl) * 2);
			justify-content: space-between;
			padding: 0 var(--scale-2xl);
			z-index: 2;

			> row {
				flex-grow: 1;
				flex-shrink: 1;
				flex-basis: 0;
			}
		}

		> workspace__body {
			display: flex;
			z-index: 1;

			> workspace__sidebar {
				display: flex;
				flex-direction: column;
				flex-shrink: 0;
				gap: var(--scale-2xl);
				overflow-x: clip;
				overflow-y: auto;
				padding: var(--scale-2xl);
				width: 16rem;

				> * {
					flex-shrink: 0;
				}

				&:first-of-type {
					border-right: solid 0.125rem var(--clr-primary);
				}

				&:last-of-type {
					border-left: solid 0.125rem var(--clr-primary);
				}
			}

			> workspace__content {
				display: grid;
				flex-shrink: 1;
				gap: var(--scale-2xl);
				grid-auto-rows: max-content;
				grid-template-columns:
					clamp(1.5rem, 1vw, 3.5rem)
					[content-start] 1fr [content-end]
					clamp(1.5rem, 1vw, 3.5rem);

				overflow-x: clip;
				overflow-y: auto;
				padding: var(--scale-2xl) 0;
				width: 100%;

				> * {
					grid-column: content;
					width: 100%;
				}
			}
		}

		> workspace__footer {
			align-items: center;

			border-top: solid 0.125rem var(--clr-primary);

			display: flex;
			flex-shrink: 0;
			height: calc(var(--scale-5xl) * 2);
			justify-content: space-between;
			padding: 0 var(--scale-2xl);
			z-index: 2;
		}
	}

	overlays {
		visibility: hidden;
		z-index: 2;

		> * {
			visibility: visible;
		}
	}
`);
