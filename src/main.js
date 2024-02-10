import './lib/css/main.css';

/** @type {Element | null} app */
const app = document.querySelector('#app');

if (app instanceof Element) {
    switch (window.location.pathname) {
        case '/':
            app.innerHTML = './views/index.html';
            break;

        case '/components':
            app.innerHTML = './views/components/index.html';
            break;

        default:
            app.innerHTML = `404`;
            break;
    }
}