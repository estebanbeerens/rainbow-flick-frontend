import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';
import { ITeamDetails } from 'src/app/shared/interfaces/team/team-details.model';
import { IUserAuth } from 'src/app/shared/interfaces/user/user-auth.model';

@Pipe({ name: 'matchRequirementsMet' })
export class MatchRequirementsMetPipe implements PipeTransform {
  constructor() {}

  transform(match: IMatchDetail) {
    const numberPlayersHome = match.players?.filter((player) => player.teamID == match.homeTeam.id).length;
    const numberPlayersAway = match.players?.filter((player) => player.teamID == match.awayTeam.id).length;
    const minRequiredPerTeam = match.matchType?.minNumberPlayersPerTeam;

    return ((numberPlayersHome >= minRequiredPerTeam) && (numberPlayersAway >= minRequiredPerTeam));
  }
}
