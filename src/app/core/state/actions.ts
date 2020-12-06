import { createAction } from '@ngrx/store';

export const toggleLoadingResults = createAction(
    '[Content] Toggle Loading Results'
);

export const toggleSideNav = createAction(
    '[SideNav] Toggle SideNav visible'
);

export const setSideNavFalse = createAction(
    '[SideNav] Set SideNav invisible'
);
