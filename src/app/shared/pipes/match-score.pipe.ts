import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';
import { ITeamDetails } from 'src/app/shared/interfaces/team/team-details.model';
import { IUserAuth } from 'src/app/shared/interfaces/user/user-auth.model';

@Pipe({ name: 'matchScore' })
export class MatchScorePipe implements PipeTransform {
  constructor() {}

  transform(match: IMatchDetail) {
    let scoreString ="? - ?"
    const finalScore = match.score[match.score.length-1];
    if(finalScore){
        scoreString = `${finalScore.scoreHome} - ${finalScore.scoreAway}`
    }
    return scoreString;
  }
}
