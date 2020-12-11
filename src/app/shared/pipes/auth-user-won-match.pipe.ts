import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';
import { ITeamDetails } from 'src/app/shared/interfaces/team/team-details.model';
import { UserAuth } from 'src/app/shared/interfaces/user/user-auth.model';

@Pipe({ name: 'authUserWonMatch' })
export class AuthUserWonMatchPipe implements PipeTransform {
  authUser: UserAuth;
  constructor(private userService: UserService) {
    this.userService.userAuth$.subscribe((value) => {
      this.authUser = value;
    });
  }

  transform(match: IMatchDetail):boolean{
    const finalScore = match.score[match.score.length-1]
    let hasWon = false;
    if(finalScore){
        const playerTeamID = match.players
        .filter((player) => player.user.id == this.authUser.id)[0].teamID;
        let teamIDWon: String;
        if(finalScore.scoreAway > finalScore.scoreHome){
            teamIDWon = match.awayTeam.id
        }else{
            teamIDWon = match.homeTeam.id
        }
        hasWon = (teamIDWon == playerTeamID)? true: false;
    }
    return hasWon
  }
}