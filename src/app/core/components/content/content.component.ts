import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class CoreContentComponent implements OnInit {

  darkMode: string;
  isAdmin: boolean = true;

  constructor() { }

  ngOnInit(): void {
    // TODO : Determine if user is admin
    this.getDarkModeFromLS();
  }

  getDarkModeFromLS(): void {
    if (localStorage.getItem('rf-darkMode')) {
      this.darkMode = localStorage.getItem('rf-darkMode');
    } else {
      this.darkMode = 'light';
      localStorage.setItem('rf-darkMode', this.darkMode);
    }
  }

  toggleDarkMode(): void {
    if (this.darkMode == 'light') {
      this.darkMode = 'dark';
    } else {
      this.darkMode = 'light';
    }
    localStorage.setItem('rf-darkMode', this.darkMode);
  }

}
