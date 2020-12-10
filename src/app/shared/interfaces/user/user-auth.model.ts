export interface IUserAuth {
  id: String;
  iat: number;
  exp: number;
  permissions: String[];
}

export class UserAuth implements IUserAuth {
  id: String;
  iat: number;
  exp: number;
  permissions: String[];

  constructor(id: String, iat: number, exp: number, permissions: String[]) {
    this.id = id;
    this.iat = iat;
    this.exp = exp;
    this.permissions = permissions;
  }

  // TODO remove in the future, just as demo to demonstrate how it works
  getFirstPermission(){
      return this.permissions[0];
  }
}
