import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUserDetails } from 'src/app/shared/interfaces/user/user-details.model';

@Component({
  selector: 'app-admin-user-details-presenter',
  templateUrl: './admin-user-details-presenter.component.html',
  styleUrls: ['./admin-user-details-presenter.component.scss'],
})
export class AdminUserDetailsPresenterComponent implements OnInit {
  @Input() user: IUserDetails;
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
