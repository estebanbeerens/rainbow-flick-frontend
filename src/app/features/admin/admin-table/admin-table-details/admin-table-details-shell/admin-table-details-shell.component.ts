import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AdminTableOverviewShellComponent } from 'src/app/features/admin/admin-table/admin-table-overview/admin-table-overview-shell/admin-table-overview-shell.component';
import { TableService } from 'src/app/services/table.service';
import { ITableDetails } from 'src/app/shared/interfaces/table/table-details.model';

@Component({
  selector: 'app-admin-table-details-shell',
  templateUrl: './admin-table-details-shell.component.html',
  styleUrls: ['./admin-table-details-shell.component.scss'],
})
export class AdminTableDetailsShellComponent implements OnInit {
  isEdit: Boolean;
  table$: Observable<ITableDetails>;
  action: string;

  constructor(
    public dialogRef: MatDialogRef<AdminTableDetailsShellComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public fb: FormBuilder,
    private _tableService: TableService
  ) {
    this.action = data.action;
    this.table$ = this._tableService.tableDetails$.asObservable();
  }

  ngOnInit(): void {
    this.isEdit = false;
  }

  createTableForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    location: ['', [Validators.required, Validators.minLength(3)]],
    imageUrl: ['', [Validators.required]],
    contactName: ['', [Validators.required, Validators.minLength(3)]],
    contactPhone: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(3)]],
  });

  submitForm() {
    console.log('SUMBIT');
    //TODO Create new table
    if (this.action == 'CREATE') {
      //TODO Create update table
    } else if (this.action == 'UPDATE') {
    }
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
