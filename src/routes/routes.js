import config from '~/config';

import HeaderOnly from '~/layouts/HeaderOnly';

import Home from '~/components/pages/Home';
import Following from '~/components/pages/Following';
import Profile from '~/components/pages/Profile';
import Upload from '~/components/pages/Upload';
import Search from '~/components/pages/Search';
import Live from '~/components/pages/Live';

const publicRoutes = [
    { path: config.routes.home, conponent: Home },
    { path: config.routes.following, conponent: Following },
    { path: config.routes.live, conponent: Live, layout: null },
    { path: config.routes.profile, conponent: Profile },
    { path: config.routes.upload, conponent: Upload, layout: HeaderOnly },
    { path: config.routes.search, conponent: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
