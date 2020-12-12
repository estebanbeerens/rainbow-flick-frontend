import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { TableService } from 'src/app/services/table.service';
import { ITableDetails } from 'src/app/shared/interfaces/table/table-details.model';

@Component({
  selector: 'app-admin-table-details-shell',
  templateUrl: './admin-table-details-shell.component.html',
  styleUrls: ['./admin-table-details-shell.component.scss'],
})
export class AdminTableDetailsShellComponent implements OnInit, OnDestroy {

  preloader$: Observable<Boolean>;
  table$: Observable<ITableDetails>;
  file: File;
  id: string;
  isNew: boolean;
  title: string;
  sub: Subscription;
  generalForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private _tableService: TableService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.id = p.id;
    })
    this._tableService.loadTableDetails(this.id);
    this.preloader$ = this._tableService.isLoading$.asObservable();
    this.table$ = this._tableService.tableDetails$.asObservable();
    this.sub = this.table$.subscribe(table => {
      this.defineIsNew(table),
      this.loadForm(table)
    });
  }

  defineIsNew(table: ITableDetails): void {
    if (table?.id == '' ){
      this.isNew = true;
      this.title = "Tafel aanmaken";
    } else {
      this.isNew = false;
      this.title = "Tafel bewerken";
    }
  }

  loadForm(table: ITableDetails): void {
    if (table) {
      this.generalForm = this.fb.group({
        name: [table.name, [Validators.required]],
        location: [table.location, [Validators.required]],
        contactName: [table.contactName, [Validators.required]],
        contactPhone: [table.contactPhone, [Validators.required]],
        description: [table.description, [Validators.required]],
        // imageUrl: [table.imageUrl],
      });
    } else {
      this.generalForm = this.fb.group({
        name: ['', [Validators.required]],
        location: ['', [Validators.required]],
        contactName: ['', [Validators.required]],
        contactPhone: ['', [Validators.required]],
        description: ['', [Validators.required]],
        // imageUrl: [table.imageUrl],
      });
    }
  }

  onFileChanged(file: File): void {
    this.file = file;
    this.generalForm.markAsDirty();
  }

  submitForm() {
    const formData = new FormData();
    formData.append('name', this.generalForm.get('name').value);
    formData.append('location', this.generalForm.get('location').value);
    formData.append('contactName', this.generalForm.get('contactName').value);
    formData.append('contactPhone', this.generalForm.get('contactPhone').value);
    formData.append('description', this.generalForm.get('description').value);

    if (this.file) {
      formData.append('image', this.file);
    }

    if (this.isNew) {
      this._tableService.createTable(formData);
    } else {
      this._tableService.updateTable(this.id, formData);
    }

    this.router.navigate(['/app/admin/table']);
  }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
