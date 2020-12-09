import { IRouteInfo } from 'src/app/core/models/routes/route-info';

export const adminHomeRoutes: IRouteInfo[] = [
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
    },
    {
        path: '/app/user/match/overview',
        title: 'Wedstrijden',
        icon: 'sports',
    },
    {
        path: '/app/user/table/overview',
        title: 'Tafels',
        icon: 'sports_soccer',
    },
    {
        path: '/app/user/team/overview',
        title: 'Teams',
        icon: 'groups',
    },
    {
        path: '/app/user/ranking',
        title: 'Ranking',
        icon: 'trending_up',
    },
    {
        path: '/TODO',
        title: 'Instellingen',
        icon: 'settings',
    },
]