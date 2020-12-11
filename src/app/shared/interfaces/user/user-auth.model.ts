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

  // getFirstPermission() {
  //   return this.permissions[0];
  // }

  canUserRead() {
    return this.permissions.includes('USER_READ');
  }
  canUserDelete() {
    return this.permissions.includes('USER_DELETE');
  }
  canUserUpdate() {
    return this.permissions.includes('USER_UPDATE');
  }

  canAdminCreate() {
    return this.permissions.includes('ADMIN_CREATE');
  }

  canTableCreate() {
    return this.permissions.includes('TABLE_CREATE');
  }
  canTableRead() {
    return this.permissions.includes('TABLE_READ');
  }
  canTableUpdate() {
    return this.permissions.includes('TABLE_UPDATE');
  }
  canTableDelete() {
    return this.permissions.includes('TABLE_DELETE');
  }

  canMatchCreate() {
    return this.permissions.includes('MATCH_CREATE');
  }
  canMatchRead() {
    return this.permissions.includes('MATCH_READ');
  }
  canMatchUpdate() {
    return this.permissions.includes('MATCH_UPDATE');
  }
  canMatchDelete() {
    return this.permissions.includes('MATCH_DELETE');
  }
  canTeamCreate() {
    return this.permissions.includes('TEAM_CREATE');
  }

  canTeamRead() {
    return this.permissions.includes('TEAM_READ');
  }
  canTeamUpdate() {
    return this.permissions.includes('TEAM_UPDATE');
  }
  canTeamDelete() {
    return this.permissions.includes('TEAM_DELETE');
  }
  canTeamJoin() {
    return this.permissions.includes('TEAM_JOIN');
  }
  canTeamAccept() {
    return this.permissions.includes('TEAM_ACCEPT');
  }
}
