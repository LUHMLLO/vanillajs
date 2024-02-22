import Page from '~lib/packages/pager/@';

export const page = new Page();

page.SEO({
	icon: '',
	author: 'lm',
	description: 'Vanilla JS - Proposal Tool About Page',
	image: '',
	keywords: [''],
	title: 'Proposal Tool - About',
});

let js = String.raw;
page.JS(js``);

let html = String.raw;
page.HTML(html`<h1>Proposal About</h1>`);

let css = String.raw;
page.CSS(css``);
