import { IMatchTypeResponse } from 'src/app/shared/interfaces/match/match-type-response.model';
import { IPlayerDetailsResponse } from 'src/app/shared/interfaces/match/player-details-response.model';
import { IScoreDetailResponse } from 'src/app/shared/interfaces/match/score-details-response.model';
import { ITableDetailsResponse } from 'src/app/shared/interfaces/table/table-details-response.model';
import { ITeamsDetailsResponse } from 'src/app/shared/interfaces/team/teams-details-response.model';
import { IUserDetailsResponse } from 'src/app/shared/interfaces/user/user-details-response.model';

export interface IMatchDetailResponse {
  id: String;
  name: String;
  dateTimePlanned: Date;
  dateTimeStart: Date;
  dateTimeEnd: Date;
  homeTeam: ITeamsDetailsResponse;
  awayTeam: ITeamsDetailsResponse;
  players: IPlayerDetailsResponse[];
  score: IScoreDetailResponse[];
  table: ITableDetailsResponse[];
  scoreSubmittedBy: IUserDetailsResponse;
  scoreValidated: Boolean;
  requirementsReached: Boolean;
  matchType: IMatchTypeResponse;
}
