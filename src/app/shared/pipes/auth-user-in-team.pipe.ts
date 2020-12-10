import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ITeamDetails } from 'src/app/shared/interfaces/team/team-details.model';
import { UserAuth } from 'src/app/shared/interfaces/user/user-auth.model';

@Pipe({ name: 'authUserInTeam' })
export class AuthUserInTeamPipe implements PipeTransform {
  authUser: UserAuth;
  constructor(private userService: UserService) {
    this.userService.userAuth$.subscribe((value) => {
      this.authUser = value;
    });
  }

  transform(team: ITeamDetails) {
    console.log(this.authUser.id);
    return team.participants?.filter((participant) => participant.id == this.authUser?.id).length == 1;
  }
}