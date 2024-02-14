import * as ViewStart from './views/+page'
import * as ViewPreview from './views/preview/+page'
import * as ViewProposal from './views/proposal/+page'

/** @type {Pager} - The array of route objects.*/
export const StaticPager = [
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
    {
        name: 'proposal',
        path: '/proposal',
        module: ViewProposal,
    },
];