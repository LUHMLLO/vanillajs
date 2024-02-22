import '~lib/packages/atypical/_properties.css';
import '~lib/packages/atypical/_reset.css';
import '~lib/packages/atypical/components.css';
import '~lib/packages/atypical/utils.css';
import '~lib/packages/atypical/widgets.css';

import App from './modules/app';

const AppElement = document.getElementById('app');

(async () => {
	let Pages;

	try {
		Pages = await import('../.server/pages');
	} catch (err) {
		console.error('Failed to load pages:', err);
	}

	try {
		if (Pages && AppElement) {
			const app = new App(AppElement, Pages.default);
			app.mount();
		}
	} catch (error) {
		console.error('Failed to mount app:', error);
	}
})();
