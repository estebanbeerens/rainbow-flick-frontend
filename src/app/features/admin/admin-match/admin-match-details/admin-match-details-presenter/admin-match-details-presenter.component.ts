import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';

@Component({
  selector: 'app-admin-match-details-presenter',
  templateUrl: './admin-match-details-presenter.component.html',
  styleUrls: ['./admin-match-details-presenter.component.scss'],
})
export class AdminMatchDetailsPresenterComponent {

  @Input() match: IMatchDetail;
  @Input() formGroup;
  @Output() closeDialog = new EventEmitter();
  @Output() submitForm = new EventEmitter();

  clickSubmitForm(): void {
    this.submitForm.emit();
  }
  
}
