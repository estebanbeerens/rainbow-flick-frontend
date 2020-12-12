import { IRouteInfo } from 'src/app/core/models/routes/route-info';

export const userHomeRoutes: IRouteInfo[] = [
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