import { Component, Input, OnInit } from '@angular/core';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';

@Component({
  selector: 'app-shared-score',
  templateUrl: './shared-score.component.html',
  styleUrls: ['./shared-score.component.scss']
})
export class SharedScoreComponent implements OnInit {
  @Input() match: IMatchDetail;
  constructor() { }

  ngOnInit(): void {
  }
}
