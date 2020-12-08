import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-admin-table-details-shell',
  templateUrl: './admin-table-details-shell.component.html',
  styleUrls: ['./admin-table-details-shell.component.scss'],
})
export class AdminTableDetailsShellComponent implements OnInit {
  isEdit: Boolean;

  constructor(
    public dialogRef: MatDialogRef<AdminTableDetailsShellComponent>,
    public fb: FormBuilder,
    private _tableService: TableService
  ) {}

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
    this._tableService.createTable(this.createTableForm.value);
    this.dialogRef.close();
  }
}
