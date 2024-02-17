import '../static/assets/css/main.vars.module.css';
import '../static/assets/css/main.reset.module.css';
import '../static/assets/css/main.components.module.css';
import '../static/assets/css/utils.module.css';
import '../static/assets/css/widgets.module.css';
import Pages from './pages.js';
import { App } from './app.js';

const AppElement = document.getElementById('app');

if (Pages && AppElement) {
	const app = new App(AppElement, Pages);
	app.mount();
}
