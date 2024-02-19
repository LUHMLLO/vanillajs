import Page from '~lib/packages/pager/@';

export const page = new Page();

page.SEO({
	author: 'lm',
	description: 'Design System - Component Previewer Page',
	image: '',
	keywords: [''],
	title: 'Preview - Component Name Here',
});

let js = String.raw;
page.JS(js``);

let html = String.raw;
page.HTML(html`<h1>Preview</h1>`);

let css = String.raw;
page.CSS(css``);
