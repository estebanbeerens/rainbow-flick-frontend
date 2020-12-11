import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-match-overview-shell',
  templateUrl: './user-match-overview-shell.component.html',
  styleUrls: ['./user-match-overview-shell.component.scss']
})
export class UserMatchOverviewShellComponent implements OnInit {

  constructor(
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  navigateToTables(): void {
    this.router.navigate(['/app/user/table']);
    this.snackBar.open('Kies hier een datum & tafel om uw match aan te maken.', '', {
      duration: 5000
    });
  }

}
