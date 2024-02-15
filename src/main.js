import '../public/assets/css/main.vars.css';
import '../public/assets/css/main.reset.css';
import '../public/assets/css/main.components.css';
import '../public/assets/css/utils.css';
import '../public/assets/css/widgets.css';

import { App } from './app';

const AppElement = document.getElementById('app');

const Pages = await fetch('/pages.json')
	.then((res) => res.json())
	.then((data) => {
		return data;
	})
	.catch((err) => {
		return console.error('pages not found', err);
	});

if (Pages && AppElement) {
	const app = new App(AppElement, Pages);
	app.mount();
}
