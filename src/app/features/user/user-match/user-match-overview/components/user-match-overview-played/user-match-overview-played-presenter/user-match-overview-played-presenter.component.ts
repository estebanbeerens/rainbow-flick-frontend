import { Component, Input, OnInit } from '@angular/core';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';

@Component({
  selector: 'app-user-match-overview-played-presenter',
  templateUrl: './user-match-overview-played-presenter.component.html',
  styleUrls: ['./user-match-overview-played-presenter.component.scss'],
})
export class UserMatchOverviewPlayedPresenterComponent implements OnInit {
  @Input() matches: IMatchDetail[];
  constructor() {}

  ngOnInit(): void {
    // console.log(this.matches)
  }
}
