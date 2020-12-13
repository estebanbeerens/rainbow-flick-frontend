import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITableDetails } from 'src/app/shared/interfaces/table/table-details.model';

@Component({
  selector: 'app-admin-table-details-presenter',
  templateUrl: './admin-table-details-presenter.component.html',
  styleUrls: ['./admin-table-details-presenter.component.scss'],
})
export class AdminTableDetailsPresenterComponent {

  @Input() table: ITableDetails;
  @Input() generalForm;

  @Output() fileChanged = new EventEmitter<File>();
  @Output() submitForm = new EventEmitter();

  ngOnInit(): void {}

  onSubmit(): void {
    this.submitForm.emit();
  }

  onFileChanged(file: File): void {
    this.fileChanged.emit(file);
  }

}
