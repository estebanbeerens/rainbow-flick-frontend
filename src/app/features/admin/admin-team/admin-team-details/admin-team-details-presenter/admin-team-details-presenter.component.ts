import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITeamDetails } from 'src/app/shared/interfaces/team/team-details.model';

@Component({
  selector: 'app-admin-team-details-presenter',
  templateUrl: './admin-team-details-presenter.component.html',
  styleUrls: ['./admin-team-details-presenter.component.scss'],
})
export class AdminTeamDetailsPresenterComponent implements OnInit {
  @Input() team: ITeamDetails;
  @Input() formGroup;
  @Output() closeDialog = new EventEmitter();
  @Output() submitForm = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}
  clickSubmitForm(): void {
    this.submitForm.emit();
  }
  addCloseDialog(): void {
    this.closeDialog.emit();
  }
}
