import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';
import { UserAuth } from 'src/app/shared/interfaces/user/user-auth.model';

@Component({
  selector: 'app-user-match-overview-invitation-presenter',
  templateUrl: './user-match-overview-invitation-presenter.component.html',
  styleUrls: ['./user-match-overview-invitation-presenter.component.scss'],
})
export class UserMatchOverviewInvitationPresenterComponent implements OnInit {
  @Input() matches: IMatchDetail[];
  @Output() onJoinMatch = new EventEmitter<{matchID: String, teamID:String}>();
  authUser: UserAuth;
  constructor(private _router: Router, private _userService:UserService) {}

  ngOnInit(): void {
    this._userService.userAuth$.subscribe((result)=> this.authUser=result);
  }

  joinMatch(matchID: String, teamID) {
    this.onJoinMatch.emit({matchID, teamID});
  }

  goToDetails(matchID: String) {
    this._router.navigate([`app/user/match/details/${matchID}`]);
  }
}
