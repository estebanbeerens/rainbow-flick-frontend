import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ITeamOverview } from 'src/app/shared/interfaces/team/team-overview.model';
import { UserAuth } from 'src/app/shared/interfaces/user/user-auth.model';

@Pipe({ name: 'idMatchesAuthUserId' })
export class IdMatchesAuthUserIdPipe implements PipeTransform {
  authUser: UserAuth;
  constructor(private userService: UserService) {
    this.userService.userAuth$.subscribe((value) => {
      this.authUser = value;
    });
  }

  transform(id: String):boolean{
    return this.authUser.id == id;
  }
}