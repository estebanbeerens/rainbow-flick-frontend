import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { MatchService } from 'src/app/services/match.service';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';

@Component({
  selector: 'app-user-game-shell',
  templateUrl: './user-game-shell.component.html',
  styleUrls: ['./user-game-shell.component.scss']
})
export class UserGameShellComponent implements OnInit {
  matchID: String;
  match: BehaviorSubject<IMatchDetail>
  constructor(private _matchService: MatchService, private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeDetails();
  }

  initializeDetails() {
    this._route.params.subscribe((params: Params) => {
      this.matchID = params.id;
    });
    this._matchService.leaveMatch(this.matchID);
    this.match = this._matchService.matchDetails$
  }
}
