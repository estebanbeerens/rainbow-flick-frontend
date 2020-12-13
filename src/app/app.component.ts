import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatchService } from 'src/app/services/match.service';
import { MessageService } from 'src/app/services/message.service';
import { TableService } from 'src/app/services/table.service';
import { TeamService } from 'src/app/services/team.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rainbow-flick-frontend';

  constructor(
    private _userService: UserService,
    private _teamService: TeamService,
    private _tableService: TableService,
    private _matchService: MatchService,
    private _messsageService: MessageService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    //TODO remove login
    this._userService.login({ email: 'super3mario@example.com', password: 'Admin1234!' });

    this._messsageService.message$.subscribe((result) => {
      console.log(result);
      if (result.length) {
        this.snackBar.open(result.shift(), '', {
          duration: 5000,
        });
      }
    });
  }
}
