import { Component, Input, OnInit } from '@angular/core';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';

@Component({
  selector: 'app-user-match-overview-played-shell',
  templateUrl: './user-match-overview-played-shell.component.html',
  styleUrls: ['./user-match-overview-played-shell.component.scss'],
})
export class UserMatchOverviewPlayedShellComponent implements OnInit {
  @Input() matches: IMatchDetail[];
  constructor() {}

  ngOnInit(): void {
    // console.log("shell", this.matches);
  }
}
