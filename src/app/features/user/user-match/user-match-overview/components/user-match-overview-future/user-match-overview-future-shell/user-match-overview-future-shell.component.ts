import { Component, Input, OnInit } from '@angular/core';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';

@Component({
  selector: 'app-user-match-overview-future-shell',
  templateUrl: './user-match-overview-future-shell.component.html',
  styleUrls: ['./user-match-overview-future-shell.component.scss']
})
export class UserMatchOverviewFutureShellComponent implements OnInit {
  @Input() matches: IMatchDetail[];
  constructor() { }

  ngOnInit(): void {
  }

}
