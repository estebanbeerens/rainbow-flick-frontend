import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-user-table-details-shell',
  templateUrl: './user-table-details-shell.component.html',
  styleUrls: ['./user-table-details-shell.component.scss'],
})
export class UserTableDetailsShellComponent implements OnInit {
  constructor(private _tableService: TableService) {}

  ngOnInit(): void {}
}
