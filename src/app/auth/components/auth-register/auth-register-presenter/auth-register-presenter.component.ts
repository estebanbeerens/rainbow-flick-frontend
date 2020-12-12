import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-auth-register-presenter',
  templateUrl: './auth-register-presenter.component.html',
  styleUrls: ['./auth-register-presenter.component.scss']
})
export class AuthRegisterPresenterComponent implements OnInit {
  
  darkMode: string;

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.sharedService.getDarkModeFromLS();
    this.sharedService.darkMode.subscribe(v => this.darkMode = v);
  }

  toggleDarkMode(): void {
    if (this.darkMode == 'light') {
      this.sharedService.setDarkMode('dark');
    } else {
      this.sharedService.setDarkMode('light');
    }
  }

}
