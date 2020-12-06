import { createReducer, on } from '@ngrx/store';
import { ICoreState, ICoreStateInitialValue } from 'src/app/core/models/state-models/core.state';

import * as actions from './actions';

export const coreReducer = createReducer<ICoreState>(
    ICoreStateInitialValue,

    on(actions.toggleLoadingResults, (state): ICoreState =>{
        return {
            ...state,
            content: {
                isLoadingResults: !state.content.isLoadingResults
            }
        }
    }),

    on(actions.toggleSideNav, (state): ICoreState =>{
        return {
            ...state,
            sidenav: {
                toggled: !state.sidenav.toggled
            }
        }
    }),

    on(actions.setSideNavFalse, (state): ICoreState =>{
        return {
            ...state,
            sidenav: {
                toggled: false
            }
        }
    }),
);