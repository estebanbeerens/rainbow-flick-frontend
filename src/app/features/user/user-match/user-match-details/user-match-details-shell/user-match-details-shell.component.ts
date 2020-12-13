import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatchService } from 'src/app/services/match.service';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';

@Component({
  selector: 'app-user-match-details-shell',
  templateUrl: './user-match-details-shell.component.html',
  styleUrls: ['./user-match-details-shell.component.scss']
})
export class UserMatchDetailsShellComponent implements OnInit {
  
  preloader$: Observable<Boolean>;
  matchID: String;
  match: BehaviorSubject<IMatchDetail>;

  constructor(
    private _matchService: MatchService, 
    private _route: ActivatedRoute,
    private _router: Router) {}

  ngOnInit(): void {
    this.initializeDetails();
  }

  initializeDetails() {
    this._route.params.subscribe((params: Params) => {
      this.matchID = params.id;
    });
    this.preloader$ = this._matchService.isLoading$.asObservable();
    this._matchService.loadMatchDetails(this.matchID);
    this.match = this._matchService.matchDetails$;
  }

  startMatch(teamID: String){
    this._router.navigate([`app/user/game/${this.matchID}`])
  }

}
