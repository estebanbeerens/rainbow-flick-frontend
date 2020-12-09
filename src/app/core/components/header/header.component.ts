import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  darkMode: string;

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.sharedService.darkMode.subscribe(v => this.darkMode = v);
  }

  toggleSideNav(): void {
    this.sharedService.toggleSideNav();
  }

}
