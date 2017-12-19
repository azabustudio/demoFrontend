import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Claim } from '../../models/claim-model';
import { User } from '../../models/user-model';

@Injectable()
export class RestProvider {

  // TODO: Need to modify after AWS instance setting up.
  apiUrl = 'http://18.217.228.115/';
  // apiUrl: string = 'http://localhost:8080/';

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