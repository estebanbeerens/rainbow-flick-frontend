import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IUserAuth, UserAuth } from 'src/app/shared/interfaces/user/user-auth.model';
import { environment } from 'src/environments/environment';
import jwt_decode from 'jwt-decode';
import { IUserLoginResponse } from 'src/app/shared/interfaces/user/user-login-response.model';
import { IUserDetailsResponse } from 'src/app/shared/interfaces/user/user-details-response.model';
import { IUsersResponse } from 'src/app/shared/interfaces/user/users-response.model';
import { IUserMessage } from 'src/app/shared/interfaces/user/user-message.model';
import { IUserDetails, IUserDetailsInitialValue } from 'src/app/shared/interfaces/user/user-details.model';
import { IUserLogin } from 'src/app/shared/interfaces/user/user-login.model';
import { MessageService } from 'src/app/services/message.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = environment.apiUrl + 'user';
  private token: string;

  isLoading$ = new BehaviorSubject(false);

  message$ = new BehaviorSubject<IUserMessage>(null);

  userAuth$ = new BehaviorSubject<UserAuth>(null);
  userDetails$ = new BehaviorSubject<IUserDetails>(null);
  loginError$ = new BehaviorSubject<String>('');
  registerError$ = new Subject<String[]>();

  users$ = new BehaviorSubject<IUserDetails[]>(null);

  constructor(
    private http: HttpClient, 
    private _messsageService: MessageService,
    private router: Router
  ) {
    const token = localStorage.getItem('token');
    if (token) {
      this.token = token;
      const decodedJwt = <IUserAuth>jwt_decode(<string>token);
      this.userAuth$.next(this.convertInterfaceToClassAuthUser(decodedJwt));
    }
  }

  _loaderInit() {
    this.isLoading$.next(true);
  }

  _loaderStop() {
    this.isLoading$.next(false);
  }

  getToken() {
    return this.token;
  }

  login(body) {
    console.log('func login');
    this.http.post(this.baseUrl + '/authenticate', body).subscribe((response) => {
      if (response['error']) {
        localStorage.removeItem('token');
        this.loginError$.next(response['error']);
        this._messsageService.setMessage(response['error']);
      } else {
        const authUser = <IUserLoginResponse>response;
        const decodedJwt = <IUserAuth>jwt_decode(<string>authUser.result.accessToken);
        this.userAuth$.next(this.convertInterfaceToClassAuthUser(decodedJwt));
        localStorage.setItem('token', <string>authUser.result.accessToken);
        const userDetails = <IUserDetailsResponse>response;
        this.userDetails$.next(userDetails.result);
        this.router.navigate(['/app']);
      }
    });
  }

  //TODO message: "Already exist" geen Array en bij "required" array
  register(body) {
    this.http.post(`${this.baseUrl}/register`, body).subscribe((response) => {
      if (response['message']) {
        this.registerError$.next(response['message']);
      } else {
        const authUser = <IUserLoginResponse>response;
        const decodedJwt = <IUserAuth>jwt_decode(<string>authUser.result.accessToken);
        this.userAuth$.next(this.convertInterfaceToClassAuthUser(decodedJwt));
        localStorage.setItem('token', <string>authUser.result.accessToken);
        const userDetails = <IUserDetailsResponse>response;
        this.userDetails$.next(userDetails.result);
        this.router.navigate(['/app']);
      }
    });
  }
  
  createAdmin(body) {
    this.http.post<IUserDetailsResponse>(`${this.baseUrl}/admin`, body).subscribe((response) => {
      this.userDetails$.next(response.result);
      this.users$.next([...this.users$.value, response.result]);
    });
  }

  logout() {
    this.userAuth$.next(null);
    localStorage.removeItem('token');
  }

  loadUsers() {
    this._loaderInit();
    this.http.get<IUsersResponse>(`${this.baseUrl}/all`).subscribe((response) => {
      this.users$.next(response.results);
      this._loaderStop();
    });
  }

  loadUserDetails(userID: String) {
    if (userID != 'create') {
      this._loaderInit();
      this.http.get<IUserDetailsResponse>(`${this.baseUrl}/${userID}`).subscribe((response) => {
        this.userDetails$.next(response.result);
        this._loaderStop();
      });
    } else {
      this.userDetails$.next(IUserDetailsInitialValue);
    }
  }

  updateUser(userID: String, body) {
    this.http.put<IUserDetailsResponse>(`${this.baseUrl}/${userID}`, body).subscribe((response) => {
      this.userDetails$.next(response.result);
      this.users$.next(
        this.users$.value.map((user) => {
          if (user.id == response.result.id) {
            user = response.result;
          }
          return user;
        })
      );
    });
  }

  deleteUser(UserID: String) {
    this.http.delete<IUserMessage>(`${this.baseUrl}/${UserID}`).subscribe((response) => {
      this.message$.next(response);
      this.users$.next(this.users$.value.filter((user) => user.id != UserID));
    });
  }

  private convertInterfaceToClassAuthUser(authUser: IUserAuth): UserAuth {
    let object = new UserAuth(
      authUser.id,
      authUser.iat,
      authUser.exp,
      authUser.permissions,
      authUser.firstName,
      authUser.lastName,
      authUser.imageURL
    );
    return object;
  }
}
