import Page from '~lib/packages/pager/@page';

export const page = new Page();

page.SEO({
	author: 'lm',
	description: 'Design System - Proposal Tool About Help',
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
