import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';

@Component({
  selector: 'app-user-match-details-presenter',
  templateUrl: './user-match-details-presenter.component.html',
  styleUrls: ['./user-match-details-presenter.component.scss']
})
export class UserMatchDetailsPresenterComponent implements OnInit{
  ngOnInit(): void {
    console.log("match", this.match)
  }
  @Input() match: IMatchDetail;
  @Output() onStartMatch = new EventEmitter<String>();

  startMatch(teamID){
    this.onStartMatch.emit(teamID);
  }
}
