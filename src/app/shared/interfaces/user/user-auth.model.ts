import { first } from 'rxjs/operators';

export interface IUserAuth {
  id: String;
  iat: number;
  exp: number;
  permissions: String[];
  firstName: String;
  lastName: String;
  imageURL: String;
}

export class UserAuth implements IUserAuth {
  id: String;
  iat: number;
  exp: number;
  permissions: String[];
  firstName: String;
  lastName: String;
  imageURL: String;

  constructor(id: String, iat: number, exp: number, permissions: String[], firstName: String, lastName:String, imageURL?:String) {
    this.id = id;
    this.iat = iat;
    this.exp = exp;
    this.permissions = permissions;
    this.firstName = firstName;
    this.lastName = lastName;
    this.imageURL = imageURL;
  }

  // TODO remove in the future, just as demo to demonstrate how it works
  getFirstPermission(){
      return this.permissions[0];
  }

  getFullName(){
    return this.firstName +" " + this.lastName;
  }
}
