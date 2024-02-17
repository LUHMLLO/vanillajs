import '../static/assets/css/main.vars.module.css';
import '../static/assets/css/main.reset.module.css';
import '../static/assets/css/main.components.module.css';
import '../static/assets/css/utils.module.css';
import '../static/assets/css/widgets.module.css';
import { App } from './modules/app';

const AppElement = document.getElementById('app');

async function init() {
	let Pages;
	try {
		Pages = await import('../.server/pages.js');
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
