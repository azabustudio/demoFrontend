import { Claim } from './../../models/claim-model';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { User } from '../../models/user-model';
import { Observable } from 'rxjs/Observable';
import { Subject } from "rxjs/Subject";

@Injectable()
export class RestProvider {

  // TODO: Need to modify after AWS instance setting up.
  // apiUrl: string = 'http://18.217.228.115/';
  apiUrl: string = 'http://localhost:8080/';

  constructor(public http: HttpClient) {
  }

  getStatus(category) {
    return new Promise(resolve => {
      let requestUrl = this.apiUrl + 'getStatus?category=' + category;
      console.log('requesting:' + requestUrl);
      this.http.get(requestUrl)
        .subscribe(data => resolve(data), err => console.log(err));
    });
  }

  login(id, password) {
    let requestUrl = this.apiUrl + 'login?username=' + id + '&password=' + password;
    return new Promise(resolve => {
      console.log('requesting:' + requestUrl);
      this.http.get(requestUrl)
        .subscribe(data => resolve(data), err => console.log(err));
    });
  }

  getClaimList(loginName: string) {
    let requestUrl = this.apiUrl + 'getClaimList?loginName=' + loginName;
    return new Promise(resolve => {
      console.log('requesting:' + requestUrl);
      this.http.get(requestUrl)
        .subscribe((data: { status: string, content: Claim[] }) => resolve(data), err => console.error(err));
    });
  }

  addClaim(claim: Claim) {
    let requestUrl = this.apiUrl + 'addClaim';
    claim.loginName = localStorage.getItem('loginName');
    return new Promise(resolve => {
      console.log('requesting:' + requestUrl);
      this.http.post(requestUrl, claim)
        .subscribe(data => resolve(data), err => console.error(err));
    });
  }

  removeClaim(claimId: number) {
    let requestUrl = this.apiUrl + 'removeClaim?claimId=' + claimId;
    return new Promise(resolve => {
      console.log('requesting:' + requestUrl);
      this.http.get(requestUrl)
        .subscribe(data => resolve(data), err => console.error(err));
    });
  }

  updateClaim(claim: Claim) {
    let requestUrl = this.apiUrl + 'updateClaim';
    return new Promise(resolve => {
      console.log('requesting:' + requestUrl);
      console.log(claim);
      this.http.post(requestUrl, claim)
        .subscribe(data => resolve(data), err => console.error(err));
    });
  }

  updateClaimStatus(claimId: number, status: string) {
    let requestUrl = this.apiUrl + 'updateClaimStatus?claimId=' + claimId
      + '&status=' + status;
    return new Promise(resolve => {
      console.log('requesting:' + requestUrl);
      this.http.get(requestUrl)
        .subscribe(data => resolve(data), err => console.error(err));
    });
  }

  activateClaim(claimId: number, active: boolean) {
    let requestUrl = this.apiUrl + 'activateClaim?claimId=' + claimId
      + '&active=' + active;
    return new Promise(resolve => {
      console.log('requesting:' + requestUrl);
      this.http.get(requestUrl)
        .subscribe(data => resolve(data), err => console.error(err));
    });
  }

  register(user: User) {
    let requestUrl = this.apiUrl + 'addUser';
    return new Promise(resolve => {
      console.log('requesting:' + requestUrl);
      console.log(user);
      this.http.post(requestUrl, user)
        .subscribe(data => resolve(data), err => console.error(err));
    });
  }
}