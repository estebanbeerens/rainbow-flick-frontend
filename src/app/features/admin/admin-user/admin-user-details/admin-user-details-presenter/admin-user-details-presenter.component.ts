import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUserDetails } from 'src/app/shared/interfaces/user/user-details.model';

@Component({
  selector: 'app-admin-user-details-presenter',
  templateUrl: './admin-user-details-presenter.component.html',
  styleUrls: ['./admin-user-details-presenter.component.scss'],
})
export class AdminUserDetailsPresenterComponent {

  @Input() user: IUserDetails;
  @Input() generalForm;

  @Output() submitForm = new EventEmitter();
  @Output() fileChanged = new EventEmitter<File>();
  
  onSubmit(): void {
    this.submitForm.emit();
  }

  onFileChanged(file: File): void {
    this.fileChanged.emit(file);
  }
  
}
