import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';
import { ITableOverviewDetails } from 'src/app/shared/interfaces/table/tables-overview-details.model';
import { ChallengeService } from 'src/app/shared/services/challenge.service';

@Component({
  selector: 'app-user-table-details-presenter',
  templateUrl: './user-table-details-presenter.component.html',
  styleUrls: ['./user-table-details-presenter.component.scss'],
})
export class UserTableDetailsPresenterComponent implements OnInit {
  @Input() table: ITableOverviewDetails;
  @Input() selectedDate: Date;

  constructor(
    private _matchService: MatchService,
    private _challengeService: ChallengeService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    // routerLink="/app/user/match/create"
  }

  planMatch() {
    this._challengeService.challenge$.next({
      dateTimePlanned: this.selectedDate,
      table: this.table,
      homeTeam: null,
      awayTeam: null,
    });
    this._router.navigate(['/app/user/match/create']);
  }
}
