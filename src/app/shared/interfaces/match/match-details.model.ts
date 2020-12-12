import { IMatchType } from 'src/app/shared/interfaces/match/match-type.model';
import { IPlayerDetails } from 'src/app/shared/interfaces/match/player-details.model';
import { IScoreDetail } from 'src/app/shared/interfaces/match/score-details.model';
import { ITableDetails } from 'src/app/shared/interfaces/table/table-details.model';
import { IUserDetails } from 'src/app/shared/interfaces/user/user-details.model';

export interface IMatchDetail {
  id: String;
  name: String;
  dateTimePlanned: Date;
  dateTimeStart: Date;
  dateTimeEnd: Date;
  homeTeam: {id: String, name:String, companyName:String,imageURL:String,participants:String[]};
  awayTeam: {id: String, name:String, companyName:String,imageURL:String,participants:String[]};
  players: IPlayerDetails[];
  score: IScoreDetail[];
  table: ITableDetails[];
  scoreSubmittedBy: IUserDetails;
  scoreValidated: Boolean;
  requirementsReached: Boolean;
  matchType: IMatchType;
}
