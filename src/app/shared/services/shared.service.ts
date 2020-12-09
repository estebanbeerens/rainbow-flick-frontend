import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SharedService {

    private valueSideNiveToggled = new BehaviorSubject<boolean>(false);
    sideNavToggled = this.valueSideNiveToggled.asObservable();

    private valueDarkMode = new BehaviorSubject<string>('light');
    darkMode = this.valueDarkMode.asObservable();

    constructor() { }

    toggleSideNav() {
        this.valueSideNiveToggled.next(!this.valueSideNiveToggled.value);
    }

    getDarkModeFromLS(): void {
        if (localStorage.getItem('rf-darkMode')) {
            this.valueDarkMode.next(localStorage.getItem('rf-darkMode'));
        } else {
            this.valueDarkMode.next('light');
            localStorage.setItem('rf-darkMode', 'light');
        }
    }

    setDarkMode(mode: string): void {
        this.valueDarkMode.next(mode);
        localStorage.setItem('rf-darkMode', mode);
    }
    
}