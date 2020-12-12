import { IRouteInfo } from 'src/app/core/models/routes/route-info';

export const adminSidenavRoutes: IRouteInfo[] = [
    {
        path: '/app/admin/home',
        title: 'Admin Dashboard',
        icon: 'dashboard',
    },
    {
        path: '/app/user/home',
        title: 'Home',
        icon: 'home',
    },
]