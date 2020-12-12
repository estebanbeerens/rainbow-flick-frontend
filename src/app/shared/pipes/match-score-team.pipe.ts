import { Pipe, PipeTransform } from '@angular/core';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';
import { IScoreDetail } from 'src/app/shared/interfaces/match/score-details.model';

@Pipe({ name: 'matchScoreTeam' })
export class MatchScoreTeamPipe implements PipeTransform {
  constructor() {}

  transform(match: IMatchDetail, home:boolean):String {
    const finalScore:IScoreDetail = match.score[match.score.length-1] ?? {homeTeamScored:false, scoreHome:"0",scoreAway:"0",id:"",whenScored:"0"};
    if(home){
        return finalScore.scoreHome
    }
    return finalScore.scoreAway;
  }
}
