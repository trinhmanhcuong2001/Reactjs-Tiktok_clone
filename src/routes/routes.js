import config from "../config";

//Layout
import { HeaderOnlyLayout } from "../layouts";

import Home from "../pages/Home";
import Following from "../pages/Following";
import Upload from "../pages/Upload";
import Search from "../pages/Search";
import Profile from "../pages/Profile";
import Live from "../pages/Live";

//Public Route
export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnlyLayout },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.live, component: Live },
];

export const privateRoutes = [];
