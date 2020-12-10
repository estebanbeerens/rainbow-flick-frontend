import { IUserDetails } from 'src/app/shared/interfaces/user/user-details.model';

export interface IPlayerDetails {
  user: IUserDetails;
  team: String;
}
