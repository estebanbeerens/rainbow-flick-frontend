import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MatchService } from 'src/app/services/match.service';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';

@Component({
  selector: 'app-admin-match-details-shell',
  templateUrl: './admin-match-details-shell.component.html',
  styleUrls: ['./admin-match-details-shell.component.scss'],
})
export class AdminMatchDetailsShellComponent implements OnInit {

  preloader$: Observable<Boolean>;
  match$: Observable<IMatchDetail>;

  constructor(
    private _matchService: MatchService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this._matchService.loadMatchDetails(p.id);
    });
    this.preloader$ = this._matchService.isLoading$.asObservable();
    this.match$ = this._matchService.matchDetails$.asObservable();
  }

}
