import Page from '~lib/packages/pager/@';

export const page = new Page();

page.SEO({
	author: 'lm',
	description: 'Vanilla JS - Error Page',
	image: '',
	keywords: [''],
	title: '404 not found',
});

let js = String.raw;
page.JS(js``);

let html = String.raw;
page.HTML(html`<h1>4.0.4</h1>`);

let css = String.raw;
page.CSS(css``);
