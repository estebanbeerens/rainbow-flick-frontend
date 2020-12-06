import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from './actions';
import * as selectors from './selectors';

@Injectable({
    providedIn: 'root',
  })
export class CoreFacade {
    
    constructor(private store: Store) {}

    // Content
    getIsLoadingResults(): Observable<boolean> {
        return this.store.select(selectors.isLoadingResults);
    }

    toggleLoadingResults(): void {
        this.store.dispatch(actions.toggleLoadingResults());
    }

    // Sidenav
    getSideNavToggled(): Observable<boolean> {
        return this.store.select(selectors.sideNavToggled);
    }

    toggleSideNav(): void {
        this.store.dispatch(actions.toggleSideNav());
    }

    setSideNavFalse(): void {
        this.store.dispatch(actions.setSideNavFalse());
    }
}