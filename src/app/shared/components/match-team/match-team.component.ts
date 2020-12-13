import { Component, Input, OnInit } from '@angular/core';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';

@Component({
  selector: 'app-match-team',
  templateUrl: './match-team.component.html',
  styleUrls: ['./match-team.component.scss']
})
export class MatchTeamComponent implements OnInit {
  @Input() match: IMatchDetail;
  constructor() { }

  ngOnInit(): void {
  }

}
