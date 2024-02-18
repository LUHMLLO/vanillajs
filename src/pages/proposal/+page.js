import Page from '~lib/pager/@page';

export const page = new Page();

page.SEO({
	author: 'lm',
	description: 'Design System - Proposal Tool Demo Page',
	image: '',
	keywords: [''],
	title: 'Proposal Tool - Demo',
});

let js = String.raw;
page.JS(js`
	import ThemeSchemes from "${
		new URL('/assets/js/themes.js', import.meta.url).href
	}";
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
			<row class="align --center gap --5xs">
				<icon> search </icon>
				<input
					type="search"
					placeholder="Type to search . . ."
					style="--c-background: transparent;" />
				<icon> filter_alt </icon>
			</row>
			<row class="align --center gap --5xs">
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
			<workspace__sidebar> workspace sidebar </workspace__sidebar>

			<workspace__content> workspace content </workspace__content>

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
		}

		> workspace__body {
			display: flex;
			flex-direction: row;
			flex-grow: 1;

			> workspace__sidebar {
				display: flex;
				flex-direction: column;
				flex-grow: 1;
				padding: var(--scale-sm);
			}

			> workspace__content {
				display: flex;
				flex-direction: column;
				flex-grow: 999;
				padding: var(--scale-sm);
			}
		}

		> workspace__footer {
			display: flex;
			flex-direction: row;
			height: calc(var(--scale-5xl) * 1.5);
			padding: var(--scale-sm);
		}
	}
`);
