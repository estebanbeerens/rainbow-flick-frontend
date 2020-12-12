import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';
import { ITeamDetails } from 'src/app/shared/interfaces/team/team-details.model';
import { ITeamOverview } from 'src/app/shared/interfaces/team/team-overview.model';
import { IUserAuth } from 'src/app/shared/interfaces/user/user-auth.model';

@Pipe({ name: 'teamDetailsToOverview' })
export class TeamDetailToOverviewPipe implements PipeTransform {
  constructor() {}

  transform(team: ITeamDetails): ITeamOverview {
    const teamOverview: ITeamOverview = {
        id: team.id,
        name: team.name,
        location: team.location,
        companyName: team.companyName,
        imageURL: team.imageURL,
        participantIDs: team.participants.map((participant) => participant.id),
        requestedParticipantIDs: team.requestedParticipants.map((participant) => participant.id),
        captainID: team.captain.id
      }
      return teamOverview
  }
}
