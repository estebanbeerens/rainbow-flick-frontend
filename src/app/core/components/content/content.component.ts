import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class CoreContentComponent implements OnInit {

  sideNavToggled: boolean;
  darkMode: string;

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.sharedService.getDarkModeFromLS();
    this.sharedService.darkMode.subscribe(v => this.darkMode = v);
    this.sharedService.sideNavToggled.subscribe(v => this.sideNavToggled = v);
  }

}
