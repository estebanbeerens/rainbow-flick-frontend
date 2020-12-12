import { IRouteInfo } from 'src/app/core/models/routes/route-info';

export const adminSidenavRoutes: IRouteInfo[] = [
    {
        path: '/app/home',
        title: 'Home',
        icon: 'home',
    },
    {
        path: '/app/admin/match',
        title: 'Wedstrijden (Admin)',
        icon: 'sports',
    },
    {
        path: '/app/admin/table',
        title: 'Tafels (Admin)',
        icon: 'sports_soccer',
    },
    {
        path: '/app/admin/team',
        title: 'Teams (Admin)',
        icon: 'groups',
    },
    {
        path: '/app/admin/user',
        title: 'Gebruikers (Admin)',
        icon: 'people',
    },
    {
        path: '/app/user/match',
        title: 'Wedstrijden',
        icon: 'sports',
    },
    {
        path: '/app/user/table',
        title: 'Tafels',
        icon: 'sports_soccer',
    },
    {
        path: '/app/user/team',
        title: 'Teams',
        icon: 'groups',
    },
    {
        path: '/app/user/ranking',
        title: 'Ranking',
        icon: 'trending_up',
    }
]