import { Component, Input, OnInit } from '@angular/core';
import { IRanking } from 'src/app/shared/interfaces/ranking/ranking.model';

@Component({
  selector: 'app-user-ranking-presenter',
  templateUrl: './user-ranking-presenter.component.html',
  styleUrls: ['./user-ranking-presenter.component.scss'],
})
export class UserRankingPresenterComponent implements OnInit {
  @Input() rankings: IRanking[];

  constructor() {}

  ngOnInit(): void {
    console.log(this.getTop3());
  }

  getTop3() {
    return this.rankings.slice(0, 3);
  }
}
