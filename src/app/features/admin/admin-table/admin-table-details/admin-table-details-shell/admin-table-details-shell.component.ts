import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  title: string;
  sub: Subscription;
  generalForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private _tableService: TableService
  ) { }

  ngOnInit(): void {
    this.preloader$ = this._tableService.isLoading$.asObservable();
    this.table$ = this._tableService.tableDetails$.asObservable();
    this.sub = this.table$.subscribe(table => {
      this.defineIsNew(table),
      this.loadForm(table)
    });
  }

  defineIsNew(table: ITableDetails): void {
    if (table?.id == '' ){
      this.title = "Tafel aanmaken";
    }else{
      this.title = "Tafel bewerken";
    }
  }

  loadForm(table: ITableDetails): void {
    if (table) {
      this.generalForm = this.fb.group({
        name: [table.name, [Validators.required, Validators.minLength(2)]],
        location: [table.location, [Validators.required, Validators.minLength(3)]],
        contactName: [table.contactName, [Validators.required, Validators.minLength(3)]],
        contactPhone: [table.contactPhone, [Validators.required, Validators.minLength(3)]],
        description: [table.description, [Validators.required, Validators.minLength(3)]],
        // imageUrl: [table.imageUrl],
      });
    } else {
      this.generalForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(2)]],
        location: ['', [Validators.required, Validators.minLength(3)]],
        contactName: ['', [Validators.required, Validators.minLength(3)]],
        contactPhone: ['', [Validators.required, Validators.minLength(3)]],
        description: ['', [Validators.required, Validators.minLength(3)]],
        // imageUrl: [table.imageUrl],
      });
    }
  }

  submitForm() {
    
  }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
