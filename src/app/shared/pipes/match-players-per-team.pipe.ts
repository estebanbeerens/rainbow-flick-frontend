import { Pipe, PipeTransform } from '@angular/core';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';
import { IPlayerDetails } from 'src/app/shared/interfaces/match/player-details.model';

@Pipe({ name: 'matchPlayerPerTeam' })
export class MatchPlayerPerTeamPipe implements PipeTransform {

  transform(match: IMatchDetail, home: boolean):IPlayerDetails[]{
    let players: IPlayerDetails[] = [];
    if(home){
      players = match.players.filter((player) => player.teamID == match.homeTeam.id);
    }else{
      players = match.players.filter((player) => player.teamID == match.awayTeam.id);
    }
   return players
  }
}