import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { UserAuthProvider } from '../userAuth/userAuth';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor( public userAuth: UserAuthProvider) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    return next.handle(request).do((event: HttpEvent<any>) => {
      console.log(event)
      if (event instanceof HttpResponse) {
        console.log(event)
        // Do nothing when response is success.
      }
    }, (err: any) => {
      console.log(err)
      if (err instanceof HttpErrorResponse) {
        // TODO
        // Can not get status code, error message correctly.
        // 401: Unauthorized -> 0: Unknow error.
        // Informal solution: when err occured, let the user end the sesion and logout.
        //this.userAuth.logoutUser(localStorage.getItem("loginName"));
      }
    });
  }
}