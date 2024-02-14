import '../public/assets/css/main.vars.css';
import '../public/assets/css/main.reset.css';
import '../public/assets/css/main.components.css';
import '../public/assets/css/utils.css';
import '../public/assets/css/widgets.css';

import { App } from './app';
import { StaticPager } from './pages';

const AppElement = document.getElementById('app');

if (AppElement) {
    const app = new App(AppElement, StaticPager);
    app.mount();
}