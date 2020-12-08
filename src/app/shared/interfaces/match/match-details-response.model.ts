import { IMatchTypeResponse } from 'src/app/shared/interfaces/match/match-type-response.model';
import { ITableDetailsResponse } from 'src/app/shared/interfaces/table/table-details-response.model';
import { IUserDetailsResponse } from 'src/app/shared/interfaces/user/user-details-response.model';

//TODO link Teams
export interface IMatchDetailResponse {
    id: String,
    name: String,
    dateTimePlanned: Date,
    dateTimeStart: Date,
    dateTimeEnd: Date,
    homeTeam: ..[],
    awayTeam: ..[],
    players: IUserDetailsResponse[],
    score: ..[],
    table: ITableDetailsResponse[],
    scoreSubmittedBy: IUserDetailsResponse,
    scoreValidated: Boolean,
    requirementsReached: Boolean,
    matchType: IMatchTypeResponse,
}

