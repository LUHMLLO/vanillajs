import Page from '~lib/packages/pager/@';

export const page = new Page();

page.SEO({
	icon: '',
	author: 'lm',
	description: 'Vanilla JS - Auth Page',
	image: '',
	keywords: [''],
	title: 'Auth',
});

let js = String.raw;
page.JS(js``);

let html = String.raw;
page.HTML(html`
	<row>
		<form
			onsubmit="function(e) => { e.preventDefault(); e.stopPropagation(); }">
			<row>
				<column>
					<icon>for_you</icon>
					<h1>DCOMS</h1>
					<p>Sign into your account</p>
				</column>
				<nav></nav>
			</row>

			<fieldset>
				<field>
					<label>Username</label>
					<input type="text" />
				</field>

				<field>
					<label>Password</label>
					<input type="password" autocomplete="on" />
				</field>

				<row class="justify --between wrap">
					<label data-variant="checkbox">
						<input type="checkbox" />
						<p>Remember me.</p>
					</label>
					<a href="javascript:void(0)">Forgot my password</a>
				</row>
			</fieldset>

			<button
				type="submit"
				data-variant="form-action"
				class="w --100 justify --between">
				Sign In
				<icon>login</icon>
			</button>
		</form>
	</row>
`);

let css = String.raw;
page.CSS(css`
	#app {
		height: 100dvh;
		overflow: clip;
		width: 100dvw;

		> row {
			height: 100%;
			justify-content: center;
			padding: var(--scale-nm);

			> form {
				background-color: var(--clr-primary);
				border-radius: var(--radius-sm);
				gap: var(--scale-xl);
				justify-content: center;
				margin: auto;
				padding: var(--scale-2xl);
				width: calc(var(--scale-5xl) * 12);

				> fieldset {
					gap: var(--scale-sm);

					> field {
						> input {
							--c-background: var(--clr-secondary);
						}
					}
				}
			}
		}
	}
`);
