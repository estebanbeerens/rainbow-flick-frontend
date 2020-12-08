import { IUserTeamsResponse } from 'src/app/shared/interfaces/user/user-teams-response.model';

export interface ITeamsDetailsResponse {
  id: String;
  name: String;
  location: String;
  companyName: String;
  imageURL: String;
  captain: IUserTeamsResponse;
  participants: IUserTeamsResponse[];
  requestedParticipants: IUserTeamsResponse[];
}
