import '../public/assets/css/main.vars.css';
import '../public/assets/css/main.reset.css';
import '../public/assets/css/main.components.css';
import '../public/assets/css/utils.css';
import '../public/assets/css/widgets.css';

import { App } from './app';

import * as ViewStart from './views/+page'
import * as ViewPreview from './views/preview/+page'


/** @type {Object[]} - The array of route objects.*/
const routes = [
    {
        path: '/',
        module: ViewStart,
    },
    {
        path: '/preview/:component',
        module: ViewPreview,
    },
];

const app = new App(document.getElementById('app'), routes);
app.router();

