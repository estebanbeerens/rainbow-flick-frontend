import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IUserAuth } from 'src/app/shared/interfaces/user/user-auth.model';
import { environment } from 'src/environments/environment';
import jwt_decode from 'jwt-decode';
import { IUserLoginResponse } from 'src/app/shared/interfaces/user/user-login-response.model';
import { IUserDetailsResponse } from 'src/app/shared/interfaces/user/user-details-response.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.apiUrl + 'user';
  private token: string;

  userAuth$ = new BehaviorSubject<IUserAuth>(null);
  userDetails$ = new BehaviorSubject<IUserDetailsResponse>(null);
  loginError$ = new BehaviorSubject<String>("");
  registerError$ = new Subject<String[]>();
  
  constructor(
    private http: HttpClient,
  ) {
    const token = localStorage.getItem("token")
    if (token) {
      this.token = token;
      const decodedJwt = <IUserAuth>jwt_decode(<string>token);

      this.userAuth$.next(decodedJwt);
    }
  }

  getToken() {
    return this.token
  }

  login(body) {
    this.http.post(`${this.baseUrl}/authenticate`, body)
      .subscribe(response => {
        if (response['error']) {
          localStorage.removeItem("token");
          this.loginError$.next(response['error']);
        } else {
          const authUser = <IUserLoginResponse>response['result'];
          const decodedJwt = <IUserAuth>jwt_decode(<string>authUser.accessToken);
          this.userAuth$.next(decodedJwt);
          localStorage.setItem("token", <string>authUser.accessToken);
        }
      })
  }

  //TODO message: "Already exist" geen Array en bij "required" array
  register(body) {
    this.http.post(`${this.baseUrl}/register`, body)
      .subscribe(response => {
        if (response['message']) {
          this.registerError$.next(response['message']);
        } else {
          const authUser = <IUserLoginResponse> response;
          const decodedJwt = <IUserAuth>jwt_decode(<string>authUser.accessToken);
          this.userAuth$.next(decodedJwt);
          localStorage.setItem("token", <string>authUser.accessToken);
        }
      })
  }

  //TODO create admin service
  createAdmin(body){
    this.http.post(`${this.baseUrl}/admin`, body)
      .subscribe(response => {
        
      })
  }

  logout() {
    this.userAuth$.next(null);
    localStorage.removeItem("token");
  }

  loadUserDetails(userID: String){
    this.http.get<IUserDetailsResponse>(`${this.baseUrl}/${userID}`).subscribe((response) => {
      this.userDetails$.next(response['result']);
    })
  }

  deleteUser(UserID: String){
    this.http.delete<IUserDetailsResponse>(`${this.baseUrl}/${UserID}`).subscribe((response) => {
      this.userDetails$.next(response);
    })
  }
}
