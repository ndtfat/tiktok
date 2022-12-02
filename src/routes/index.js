import HeaderOnly from "~/components/Layout/HeaderOnly";

import Home from "~/components/pages/Home";
import Following from "~/components/pages/Following";
import Profile from "~/components/pages/Profile";
import Upload from "~/components/pages/Upload";

const publicRoutes = [
    { path: '/', conponent: Home },
    { path: '/following', conponent: Following },
    { path: '/profile', conponent: Profile },
    { path: '/upload', conponent: Upload, layout: HeaderOnly },
]

const privateRoutes = []

export { publicRoutes, privateRoutes } 