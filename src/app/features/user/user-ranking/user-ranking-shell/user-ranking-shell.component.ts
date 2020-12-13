import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RankingService } from 'src/app/services/ranking.service';
import { IRanking } from 'src/app/shared/interfaces/ranking/ranking.model';

@Component({
  selector: 'app-user-ranking-shell',
  templateUrl: './user-ranking-shell.component.html',
  styleUrls: ['./user-ranking-shell.component.scss']
})
export class UserRankingShellComponent implements OnInit {
  preloader$: Observable<Boolean>;
  ranking$: Observable<IRanking[]>;

  constructor(private _rankingService: RankingService) { }

  ngOnInit(): void {
    this._rankingService.loadRanking();
    this.ranking$ = this._rankingService.raking$.asObservable();

  }

}
