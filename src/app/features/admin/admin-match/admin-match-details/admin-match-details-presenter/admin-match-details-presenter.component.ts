import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';

@Component({
  selector: 'app-admin-match-details-presenter',
  templateUrl: './admin-match-details-presenter.component.html',
  styleUrls: ['./admin-match-details-presenter.component.scss'],
})
export class AdminMatchDetailsPresenterComponent implements OnInit {
  @Input() match: IMatchDetail;
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
