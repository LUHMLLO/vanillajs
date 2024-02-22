import Page from '~lib/packages/pager/@';

export const page = new Page();

page.SEO({
	icon: '',
	author: 'lm',
	description: 'Vanilla JS - Proposal Tool About Help',
	image: '',
	keywords: [''],
	title: 'Proposal Tool - Help',
});

let js = String.raw;
page.JS(js``);

let html = String.raw;
page.HTML(html`<h1>Proposal Help</h1>`);

let css = String.raw;
page.CSS(css``);
