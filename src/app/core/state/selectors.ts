import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICoreState } from 'src/app/core/models/state-models/core.state';

export const getCitiesFeatureState = createFeatureSelector<ICoreState>('core');

// Content
export const isLoadingResults = createSelector(
    getCitiesFeatureState,
    (state) => state.content.isLoadingResults
);

// Sidenav
export const sideNavToggled = createSelector(
    getCitiesFeatureState,
    (state) => state.sidenav.toggled
);