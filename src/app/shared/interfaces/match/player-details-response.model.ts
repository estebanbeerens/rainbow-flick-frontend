import { IUserDetailsResponse } from 'src/app/shared/interfaces/user/user-details-response.model';

export interface IPlayerDetailsResponse {
    user: IUserDetailsResponse,
    team: String,
}