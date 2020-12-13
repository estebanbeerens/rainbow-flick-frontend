import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ITeamDetails } from 'src/app/shared/interfaces/team/team-details.model';
import { UserAuth } from 'src/app/shared/interfaces/user/user-auth.model';

@Component({
  selector: 'app-admin-team-overview-presenter',
  templateUrl: './admin-team-overview-presenter.component.html',
  styleUrls: ['./admin-team-overview-presenter.component.scss'],
})
export class AdminTeamOverviewPresenterComponent {

  minTable: number = 0;
  splitEvery: number = 5;
  total: number;

  viewTeams: ITeamDetails[];
  @Input() teams: ITeamDetails[];
  @Output() delete = new EventEmitter();
  @Output() onClick = new EventEmitter();

  authUser: UserAuth;
  constructor(private _userService: UserService){
     this._userService.userAuth$.subscribe((result)=>this.authUser=result)
  }

  ngOnChanges() {
    this.total = this.teams.length;
    this.viewTeams = this.teams.slice(this.minTable, this.splitEvery);
  }

  tablePagination(min: number, max: number) {
    this.viewTeams = this.teams.slice(min, max);
  }

  clickPrevious(result) {
    this.tablePagination(result.from, result.to);
  }

  clickNext(result) {
    this.tablePagination(result.from, result.to);
  }

  clickView(id: String): void {
    this.onClick.emit(id);
  }

  clickDelete(id: String): void {
    this.delete.emit(id);
  }
}
