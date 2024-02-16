import * as __pages__page_js from './pages/+page.js';
import * as __pages_preview__page_js from './pages/preview/+page.js';
import * as __pages_proposal__about_js from './pages/proposal/+about.js';
import * as __pages_proposal__page_js from './pages/proposal/+page.js';
import * as __pages_proposal_help__page_js from './pages/proposal/help/+page.js';
export default [
	{
		path: '/',
		import: __pages__page_js,
	},
	{
		path: '/preview',
		import: __pages_preview__page_js,
	},
	{
		path: '/proposal/about',
		import: __pages_proposal__about_js,
	},
	{
		path: '/proposal',
		import: __pages_proposal__page_js,
	},
	{
		path: '/proposal/help',
		import: __pages_proposal_help__page_js,
	},
];
