import { IRouteInfo } from 'src/app/core/models/routes/route-info';

export const adminNavRoutes: IRouteInfo[] = [
    {
        path: '/app/admin/match',
        title: 'Wedstrijden',
        icon: 'sports',
    },
    {
        path: '/app/admin/table',
        title: 'Tafels',
        icon: 'sports_soccer',
    },
    {
        path: '/app/home',
        title: 'Home',
        icon: 'home',
    },
    {
        path: '/app/admin/team',
        title: 'Teams',
        icon: 'groups',
    },
    {
        path: '/app/admin/user',
        title: 'Gebruikers',
        icon: 'people',
    },
]