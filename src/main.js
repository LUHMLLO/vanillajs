import '../static/assets/css/main.vars.module.css';
import '../static/assets/css/main.reset.module.css';
import '../static/assets/css/main.components.module.css';
import '../static/assets/css/utils.module.css';
import '../static/assets/css/widgets.module.css';
import Pages from '~server/pages.js';
import { App } from './classes/app';

const AppElement = document.getElementById('app');

if (Pages && AppElement) {
	const app = new App(AppElement, Pages);
	app.mount();
}
