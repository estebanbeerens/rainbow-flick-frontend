import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError, EMPTY } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { MessageService } from 'src/app/services/message.service';

@Injectable()
export class SecurityInterceptor implements HttpInterceptor {
  constructor(private _router: Router, private messageService: MessageService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token,
        },
      });
    }
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status == 400) {
          if (err.error['messages']) {
            this.messageService.setMessages(err.error['messages']);
          }
          if (err.error['message']) {
            this.messageService.setMessages(err.error['message']);
          }
        } else if (err.status === 401) {
          this._router.navigate(['security']);
        } else {
          console.log(err);
          return throwError('unauthorized');
        }
        return EMPTY;
      })
    );
  }
}
