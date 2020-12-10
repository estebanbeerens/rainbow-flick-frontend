import { IUserTeams } from 'src/app/shared/interfaces/user/user-teams.model';

export interface ITeamDetails {
  id: String;
  name: String;
  location: String;
  companyName: String;
  imageURL: String;
  captain: IUserTeams;
  participants: IUserTeams[];
  requestedParticipants: IUserTeams[];
}
