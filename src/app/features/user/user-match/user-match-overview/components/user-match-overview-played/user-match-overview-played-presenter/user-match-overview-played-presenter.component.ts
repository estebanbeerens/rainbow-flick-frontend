import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';

@Component({
  selector: 'app-user-match-overview-played-presenter',
  templateUrl: './user-match-overview-played-presenter.component.html',
  styleUrls: ['./user-match-overview-played-presenter.component.scss'],
})
export class UserMatchOverviewPlayedPresenterComponent implements OnInit {
  @Input() matches: IMatchDetail[];
  constructor(private _router: Router){}
  
  goToDetails(matchID: String){
    this._router.navigate([`app/user/match/details/${matchID}`]);
  }

  ngOnInit(): void {
    // console.log(this.matches)
  }
}
