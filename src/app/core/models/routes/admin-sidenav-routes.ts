import { IRouteInfo } from 'src/app/core/models/routes/route-info';

export const adminSidenavRoutes: IRouteInfo[] = [
    {
        path: '/app/admin',
        title: 'Admin Paneel',
        icon: 'admin_panel_settings',
    },
    {
        path: '/app/user',
        title: 'User Paneel',
        icon: 'account_circle',
    },
]