import * as ViewStart from './views/+page'
import * as ViewPreview from './views/preview/+page.js'

/** @type {Pager} - The array of route objects.*/
export const StaticPages = [
    {
        name: 'root',
        path: '/',
        module: ViewStart,
    },
    {
        name: 'preview',
        path: '/preview',
        module: ViewPreview,
    },
];