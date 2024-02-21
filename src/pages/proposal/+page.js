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
				<field data-variant="command-palette-search">
					<icon> search </icon>
					<input
						type="text"
						placeholder="Type to search . . ."
						style="--c-background: transparent;" />
					<icon> filter_alt </icon>
				</field>
			</row>
			<row class="align --center gap --5xs justify --end">
				<button onclick="themeHandler.set('auto')">set theme auto</button>
				<button onclick="themeHandler.set('light')">set theme light</button>
				<button onclick="themeHandler.set('dark')">set theme dark</button>
				<figure data-variant="avatar">
					<img
						src="https://cdn.dribbble.com/userupload/12848764/file/original-2c583b50c3d879bd6feeaad53dc59233.jpg?resize=752x"
						alt="avatar-thumbnail" />
				</figure>
			</row>
		</workspace__header>

		<workspace__body>
			<workspace__sidebar>
				<button>
					<icon> dashboard </icon>
					<span>Overview</span>
				</button>
				<hr />
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
				<section>
					<h2>Section name</h2>
					<hr />
					<grid max="4">
						<card> </card>
					</grid>
				</section>
				<section>
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

			<workspace__sidebar> workspace sidebar </workspace__sidebar>
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
		overflow: clip;
		width: 100dvw;

		> workspace__header {
			align-items: center;
			display: flex;
			flex-direction: row;
			height: calc(var(--scale-5xl) * 1.5);
			justify-content: space-between;
			padding: var(--scale-sm);

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

			> workspace__sidebar {
				background-color: var(--clr-primary);

				display: flex;
				flex-direction: column;
				flex-grow: 1;
				flex-shrink: 0;
				gap: var(--scale-sm);
				padding: var(--scale-sm);

				> button {
					--c-background: var(--clr-secondary);
					width: 100%;
				}

				> hr {
					--c-background: var(--clr-secondary);
				}
			}

			> workspace__content {
				display: flex;
				flex-direction: column;
				flex-grow: 999;
				flex-shrink: 1;
				gap: var(--scale-sm);
				padding: var(--scale-sm) var(--scale-5xl);
			}
		}

		> workspace__footer {
			display: flex;
			flex-direction: row;
			height: var(--scale-5xl);
			padding: var(--scale-sm);
		}
	}
`);
