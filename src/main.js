import '../public/assets/css/main.vars.css';
import '../public/assets/css/main.reset.css';
import '../public/assets/css/main.components.css';
import '../public/assets/css/utils.css';
import '../public/assets/css/widgets.css';

import { App } from './app';

import * as ViewStart from './views/index.js'
import * as card_v1_productpack from './views/components/card/v1/productpack'
import * as card_v1_productpack__mini from './views/components/card/v1/productpack/mini.js'


/** @type {Object[]} - The array of route objects.*/
const routes = [
    {
        path: '/',
        module: ViewStart,
    },
    {
        path: '/components/card/v1/productpack',
        module: card_v1_productpack,
    },
    {
        path: '/components/card/v1/productpack/mini',
        module: card_v1_productpack__mini,
    }
];

const app = new App(document.getElementById('app'), routes);
app.router();

