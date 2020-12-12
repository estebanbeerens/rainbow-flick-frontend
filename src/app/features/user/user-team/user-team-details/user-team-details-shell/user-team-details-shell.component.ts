import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { TeamService } from 'src/app/services/team.service';
import { ITeamDetails } from 'src/app/shared/interfaces/team/team-details.model';

@Component({
  selector: 'app-user-team-details-shell',
  templateUrl: './user-team-details-shell.component.html',
  styleUrls: ['./user-team-details-shell.component.scss'],
})
export class UserTeamDetailsShellComponent implements OnInit {
  team$: BehaviorSubject<ITeamDetails>;
  teamID = '';
  constructor(private _teamService: TeamService, private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeDetails();
  }

  initializeDetails() {
    this._route.params.subscribe((params: Params) => {
      this.teamID = params.id;
      this._teamService.loadTeamDetails(params.id);
    });
    this.team$ = this._teamService.teamDetails$;
  }

  deleteMember(memeberID: String) {
    this._teamService.leaveTeam(this.teamID, { id: memeberID });
  }

  accepUser(memberID: String) {
    this._teamService.acceptTeam(this.teamID, { id: memberID });
  }
}
