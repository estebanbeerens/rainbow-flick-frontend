import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatchService } from 'src/app/services/match.service';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';

@Component({
  selector: 'app-admin-match-details-shell',
  templateUrl: './admin-match-details-shell.component.html',
  styleUrls: ['./admin-match-details-shell.component.scss'],
})
export class AdminMatchDetailsShellComponent implements OnInit {

  match$: Observable<IMatchDetail>;

  constructor(
    private _matchService: MatchService
  ) { }

  ngOnInit(): void {
    this.match$ = this._matchService.matchDetails$.asObservable();
  }

}
