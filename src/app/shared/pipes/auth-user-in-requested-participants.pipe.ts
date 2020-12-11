import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ITeamDetails } from 'src/app/shared/interfaces/team/team-details.model';
import { UserAuth } from 'src/app/shared/interfaces/user/user-auth.model';

@Pipe({ name: 'authUserInRequestedParticipants' })
export class AuthUserInRequestedParticipantsPipe implements PipeTransform {
  authUser: UserAuth;
  constructor(private userService: UserService) {
    this.userService.userAuth$.subscribe((value) => {
      this.authUser = value;
    });
  }

  transform(team: ITeamDetails):boolean{
    console.log(this.authUser?.id);
    return team.requestedParticipants?.filter((participant) => participant.id == this.authUser?.id).length == 1;
  }
}