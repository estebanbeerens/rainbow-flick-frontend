import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rainbow-flick-frontend';

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    console.log('ok');
    this._userService.login({ email: 'admin20@example.com', password: 'Admin1234!' });
    this._userService.userDetails$.subscribe((result) => console.log(result));
  }
}
