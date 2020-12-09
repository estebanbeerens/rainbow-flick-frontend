import { IRouteInfo } from 'src/app/core/models/routes/route-info';

export const adminSidenavRoutes: IRouteInfo[] = [
    {
        path: '/app/home',
        title: 'Home',
        icon: 'home',
    },
    {
        path: '/app/admin/match/overview',
        title: 'Wedstrijden (Admin)',
        icon: 'sports',
    },
    {
        path: '/app/admin/table/overview',
        title: 'Tafels (Admin)',
        icon: 'sports_soccer',
    },
    {
        path: '/app/admin/team/overview',
        title: 'Teams (Admin)',
        icon: 'groups',
    },
    {
        path: '/app/admin/user/overview',
        title: 'Gebruikers (Admin)',
        icon: 'people',
    }
]