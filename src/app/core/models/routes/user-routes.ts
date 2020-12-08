import { IRouteInfo } from 'src/app/core/models/routes/route-info';

export const userRoutes: IRouteInfo[] = [
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
        path: '/app/home',
        title: 'Home',
        icon: 'home',
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
]