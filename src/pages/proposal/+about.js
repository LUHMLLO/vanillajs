import Page from '~lib/pager/@page';

export const page = new Page();

page.SEO({
	author: 'lm',
	description: 'Design System - Proposal Tool About Page',
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
