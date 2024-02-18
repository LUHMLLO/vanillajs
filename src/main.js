import '~lib/atypical/main.vars.module.css';
import '~lib/atypical/main.reset.module.css';
import '~lib/atypical/main.components.module.css';
import '~lib/atypical/utils.module.css';
import '~lib/atypical/widgets.module.css';
import App from './modules/app';

const AppElement = document.getElementById('app');

async function init() {
	let Pages;
	try {
		Pages = await import('../.server/pages');
	} catch (err) {
		console.error('Failed to load pages:', err);
		// Handle the error appropriately in your application
	}

	if (Pages && AppElement) {
		const app = new App(AppElement, Pages.default);
		app.mount();
	}
}

init();
