import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ITeamDetails } from 'src/app/shared/interfaces/team/team-details.model';
import { ITeamOverview } from 'src/app/shared/interfaces/team/team-overview.model';
import { IUserAuth } from 'src/app/shared/interfaces/user/user-auth.model';

@Pipe({ name: 'authUserTeamCaptain' })
export class AuthUserTeamCaptainPipe implements PipeTransform {
  authUser: IUserAuth;
  constructor(private userService: UserService) {
    this.userService.userAuth$.subscribe((value) => {
      this.authUser = value;
    });
  }

  transform(team: ITeamOverview) {
    return team.captainID == this.authUser.id;
  }
}