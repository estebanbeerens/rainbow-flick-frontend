import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITeamDetails } from 'src/app/shared/interfaces/team/team-details.model';

@Component({
  selector: 'app-admin-team-overview-presenter',
  templateUrl: './admin-team-overview-presenter.component.html',
  styleUrls: ['./admin-team-overview-presenter.component.scss'],
})
export class AdminTeamOverviewPresenterComponent implements OnInit {
  minTable: number = 0;
  splitEvery: number = 5;
  total: number;

  viewTeams: ITeamDetails[];
  @Input() teams: ITeamDetails[];
  @Output() delete = new EventEmitter();
  @Output() actionButton = new EventEmitter();

  //TODO PRELOADER

  ngOnChanges() {
    console.log(this.teams);
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

  clickView(ID: String): void {
    console.log('click view');
    this.actionButton.emit({ ID: ID, action: 'VIEW' });
  }

  clickDelete(ID: String): void {
    this.delete.emit(ID);
  }

  ngOnInit(): void {}
}
