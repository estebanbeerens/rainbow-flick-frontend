import { IRouteInfo } from 'src/app/core/models/routes/route-info';

export const adminHomeRoutes: IRouteInfo[] = [
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
    }
]