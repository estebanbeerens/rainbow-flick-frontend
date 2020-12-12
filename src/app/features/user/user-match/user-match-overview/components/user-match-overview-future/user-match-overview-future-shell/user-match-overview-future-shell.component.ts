import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';

@Component({
  selector: 'app-user-match-overview-future-shell',
  templateUrl: './user-match-overview-future-shell.component.html',
  styleUrls: ['./user-match-overview-future-shell.component.scss']
})
export class UserMatchOverviewFutureShellComponent implements OnInit {
  @Input() matches: IMatchDetail[];
  constructor(
    private _matchService: MatchService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  startMatch(matchID: String){
    this._matchService.startMatch(matchID);
    this._router.navigate(['game/overview']);
  }

}
