import { IMatchType } from 'src/app/shared/interfaces/match/match-type.model';
import { IPlayerDetails } from 'src/app/shared/interfaces/match/player-details.model';
import { IScoreDetail } from 'src/app/shared/interfaces/match/score-details.model';
import { ITableDetails } from 'src/app/shared/interfaces/table/table-details.model';
import { ITeamDetails } from 'src/app/shared/interfaces/team/team-details.model';
import { IUserDetails } from 'src/app/shared/interfaces/user/user-details.model';

export interface IMatchDetail {
  id: String;
  name: String;
  dateTimePlanned: Date;
  dateTimeStart: Date;
  dateTimeEnd: Date;
  homeTeam: ITeamDetails;
  awayTeam: ITeamDetails;
  players: IPlayerDetails[];
  score: IScoreDetail[];
  table: ITableDetails[];
  scoreSubmittedBy: IUserDetails;
  scoreValidated: Boolean;
  requirementsReached: Boolean;
  matchType: IMatchType;
}
