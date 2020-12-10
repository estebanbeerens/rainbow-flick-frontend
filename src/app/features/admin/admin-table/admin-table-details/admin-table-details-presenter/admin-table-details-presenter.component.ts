import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITableDetails } from 'src/app/shared/interfaces/table/table-details.model';

@Component({
  selector: 'app-admin-table-details-presenter',
  templateUrl: './admin-table-details-presenter.component.html',
  styleUrls: ['./admin-table-details-presenter.component.scss'],
})
export class AdminTableDetailsPresenterComponent implements OnInit {
  @Input() table: ITableDetails;
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
