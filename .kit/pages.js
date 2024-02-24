import * as _src_pages__error_js from '~src/pages/+error.js';
import * as _src_pages__page_js from '~src/pages/+page.js';
import * as _src_pages_preview__page_js from '~src/pages/preview/+page.js';
import * as _src_pages_proposal__about_js from '~src/pages/proposal/+about.js';
import * as _src_pages_proposal__page_js from '~src/pages/proposal/+page.js';
import * as _src_pages_proposal_help__page_js from '~src/pages/proposal/help/+page.js';
export default [
	{
		path: '/error',
		import: _src_pages__error_js,
	},
	{
		path: '/',
		import: _src_pages__page_js,
	},
	{
		path: '/preview',
		import: _src_pages_preview__page_js,
	},
	{
		path: '/proposal/about',
		import: _src_pages_proposal__about_js,
	},
	{
		path: '/proposal',
		import: _src_pages_proposal__page_js,
	},
	{
		path: '/proposal/help',
		import: _src_pages_proposal_help__page_js,
	},
];
