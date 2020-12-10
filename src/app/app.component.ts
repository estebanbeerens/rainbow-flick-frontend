import { Component } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { MessageService } from 'src/app/services/message.service';
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
    private _matchService: MatchService,
    private _messsageService: MessageService
  ) {}

  ngOnInit(): void {
    // console.log('ok');
    // this._userService.login({ email: 'superadmin@example.com', password: 'Admin1234!' });
    // this._userService.userDetails$.subscribe((result) => console.log('User details:', result));

    /*USERS*/
    // this._userService.userAuth$.subscribe((result) => console.log('User auth', result));
    // this._userService.userDetails$.subscribe((result) => console.log('User details:', result));

    // this._userService.register({
    //   firstName: 'Joske',
    //   lastName: 'Vermeulen',
    //   email: 'tt1234@example.com',
    //   dateOfBirth: '1989-01-01T00:00:00.000Z',
    //   imageURL:
    //     'https://cdn5.vectorstock.com/i/thumb-large/17/59/default-placeholder-businessman-half-length-portr-vector-21181759.jpg',
    //   password: 'Joske1234!!',
    // });

    // this._userService.userDetails$.subscribe((result) => console.log('User details:', result));
    // this._userService.userAuth$.subscribe((result) => {

    // });

    // this._userService.loadUserDetails('5fcfec18443c0400049e8ac9');
    // this._userService.updateUser('5fcec9f2ab63bf1ab480294b', {
    //   lastName: 'BONE',
    // });

    // this._teamService.createTeam({
    //   name: 'TYYsrrrrr',
    //   location: '1e verdiep',
    //   companyName: 'Globex Corporation',
    //   imageURL: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/team-1561302-1322526.png',
    // });
    // this._teamService.teamDetails$.subscribe((result) => console.log(result));
    // this._teamService.teams$.subscribe((result) => console.log(result));

    // this._teamService.loadTeamByName('Appellen');
    // this._teamService.joinTeam('5fd1fa42469b4100043bebc3', {
    //   id: '5fce9b3cfb9aa569cca3bef1',
    // });

    // this._teamService.acceptTeam('5fd1fa42469b4100043bebc3', {
    //   id: '5fce9b3cfb9aa569cca3bef1',
    // });
    // this._teamService.teamDetails$.subscribe((resuslt) => console.log(resuslt));

    this._matchService.challengeMatch({
      homeTeam: '5fcfc4782e9463437ce096bb',
      awayTeam: '5fcfc9d26938284d8cce830e',
      dateTimePlanned: '1607601397106',
      table: '5fcf3df863a2aa2dd077782e',
    });
    this._messsageService.message$.subscribe((mes) => console.log(mes));
    this._matchService.matchDetails$.subscribe((result) => console.log('ok', result));
  }
}
