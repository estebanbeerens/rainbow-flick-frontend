import { IUserTeams, IUserTeamsInitialValue } from 'src/app/shared/interfaces/user/user-teams.model';

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

export const ITeamDetailsInitialValue: ITeamDetails = {
  id: '',
  name: '',
  location: '',
  companyName: '',
  imageURL: '',
  captain: IUserTeamsInitialValue,
  participants: [],
  requestedParticipants: []
}
