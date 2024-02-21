import Page from '~lib/packages/pager/@';

export const page = new Page();

page.SEO({
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
				<icon> brightness_7 </icon>
				<h4>
					<small>Proposals by Gizmo</small>
				</h4>
			</row>
			<row class="align --center gap --5xs justify --center">
				<field data-variant="command-palette-search" class="grow">
					<icon> search </icon>
					<input
						type="text"
						placeholder="Type to search . . ."
						style="--c-background: transparent;" />
					<icon> filter_alt </icon>
				</field>
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
						<button onclick="themeHandler.set('auto')">set theme auto</button>
						<button onclick="themeHandler.set('light')">set theme light</button>
						<button onclick="themeHandler.set('dark')">set theme dark</button>
					</dialog>
				</dropdown>
			</row>
		</workspace__header>

		<workspace__body>
			<workspace__sidebar>
				<h6>Quick Actions</h6>
				<button>
					<icon> add </icon>
					<span>Quick action</span>
				</button>
				<button>
					<icon> add </icon>
					<span>Quick action</span>
				</button>
				<button>
					<icon> add </icon>
					<span>Quick action</span>
				</button>
				<hr />
				<h6>Modules</h6>
				<button>
					<icon> dashboard </icon>
					<span>Customer information</span>
				</button>
				<button>
					<icon> dashboard </icon>
					<span>System Equipment</span>
				</button>
				<button>
					<icon> dashboard </icon>
					<span>Project Adders</span>
				</button>
				<button>
					<icon> dashboard </icon>
					<span>Additional Work</span>
				</button>
				<button>
					<icon> dashboard </icon>
					<span>Additional Projects</span>
				</button>
				<button>
					<icon> dashboard </icon>
					<span>Internal Sale Notes</span>
				</button>
				<button>
					<icon> dashboard </icon>
					<span>Financial</span>
				</button>
			</workspace__sidebar>

			<workspace__content>
				<stepper>
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

				<section class="flow-content">
					<h2>Section name</h2>
					<hr />
					<grid max="2" style="--gap: var(--scale-2xl)">
						<fieldset class="gap --sm">
							<field>
								<label>label</label>
								<input type="text" />
							</field>
							<field>
								<label>label</label>
								<input type="text" />
							</field>
						</fieldset>

						<fieldset class="gap --sm">
							<field>
								<label>label</label>
								<input type="text" />
							</field>
							<field>
								<label>label</label>
								<input type="text" />
							</field>
						</fieldset>

						<fieldset class="gap --sm">
							<field>
								<label>label</label>
								<input type="text" />
							</field>
							<field>
								<label>label</label>
								<input type="text" />
							</field>
						</fieldset>

						<fieldset class="gap --sm">
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
			</workspace__content>
		</workspace__body>

		<workspace__footer> workspace footer </workspace__footer>
	</workspace>
`);

let css = String.raw;
page.CSS(css`
	html,
	body,
	#app {
		display: contents;
	}

	workspace {
		display: flex;
		flex-direction: column;
		height: 100dvh;
		isolation: isolate;
		overflow: clip;
		width: 100dvw;

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
			flex-direction: row;
			flex-grow: 1;
			z-index: 1;

			> workspace__sidebar {
				border-right: solid 0.125rem var(--clr-primary);

				display: flex;
				flex-direction: column;
				flex-grow: 1;
				flex-shrink: 0;
				gap: var(--scale-sm);
				padding: var(--scale-2xl);

				> button {
					width: 100%;
				}
			}

			> workspace__content {
				display: flex;
				flex-direction: column;
				flex-grow: 999;
				flex-shrink: 1;
				gap: var(--scale-2xl);

				> * {
					margin: 0 auto;
					max-width: 88%;
					width: 100%;
				}
			}
		}

		> workspace__footer {
			align-items: center;

			border-top: solid 0.125rem var(--clr-primary);

			display: flex;
			height: calc(var(--scale-5xl) * 2);
			justify-content: space-between;
			padding: 0 var(--scale-2xl);
			z-index: 2;
		}
	}
`);
