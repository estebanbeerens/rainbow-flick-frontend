export interface IUserTeams {
  id: String;
  firstName: String;
  lastName: String;
  email: String;
  dateOfBirth: Date;
  imageURL: String;
}

export const IUserTeamsInitialValue: IUserTeams = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  dateOfBirth: new Date(),
  imageURL: '',
}
