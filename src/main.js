import '../public/assets/css/main.vars.css';
import '../public/assets/css/main.reset.css';
import '../public/assets/css/main.components.css';
import '../public/assets/css/utils.css';
import '../public/assets/css/widgets.css';

import { App } from './app';
import { StaticPager } from './pages';

const app = new App(document.getElementById('app'), StaticPager);
app.mount();