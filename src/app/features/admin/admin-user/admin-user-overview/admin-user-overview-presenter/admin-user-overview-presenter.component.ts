import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUserDetails } from 'src/app/shared/interfaces/user/user-details.model';

@Component({
  selector: 'app-admin-user-overview-presenter',
  templateUrl: './admin-user-overview-presenter.component.html',
  styleUrls: ['./admin-user-overview-presenter.component.scss'],
})
export class AdminUserOverviewPresenterComponent implements OnInit {
  minTable: number = 0;
  splitEvery: number = 5;
  total: number;

  viewUsers: IUserDetails[];
  @Input() users: IUserDetails[];
  @Output() delete = new EventEmitter();
  @Output() actionButton = new EventEmitter();

  ngOnChanges() {
    if (this.users != null) {
      this.total = this.users.length;
      this.viewUsers = this.users.slice(this.minTable, this.splitEvery);
    }
  }

  tablePagination(min: number, max: number) {
    this.viewUsers = this.users.slice(min, max);
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
