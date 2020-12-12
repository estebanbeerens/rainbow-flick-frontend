import { IUserPermissionResponse } from 'src/app/shared/interfaces/user/user-permission-response.model';

export interface IUserDetails {
  id: String;
  firstName: String;
  lastName: String;
  email: String;
  dateOfBirth: Date;
  imageURL: String;
  permissions: IUserPermissionResponse[];
}

export const IUserDetailsInitialValue: IUserDetails = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  dateOfBirth: new Date(),
  imageURL: '',
  permissions: []
}
