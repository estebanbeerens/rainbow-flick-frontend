import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUserDetails } from 'src/app/shared/interfaces/user/user-details.model';

@Component({
  selector: 'app-user-profile-presenter',
  templateUrl: './user-profile-presenter.component.html',
  styleUrls: ['./user-profile-presenter.component.scss']
})
export class UserProfilePresenterComponent {

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
