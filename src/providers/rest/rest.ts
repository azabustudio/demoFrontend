import { ConfigurationService } from './../configuration/configuration.service';
import { Claim } from './../../models/claim-model';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { User } from '../../models/user-model';
import { Observable } from 'rxjs/Observable';
import { Subject } from "rxjs/Subject";

@Injectable()
export class RestProvider {

  apiUrl: string = ConfigurationService.apiServer;
  isProduct: boolean = ConfigurationService.isProduct;

  constructor(public http: HttpClient) {
    console.debug('configuration', this.apiUrl);
    console.debug('configuration', this.isProduct);
  }

  getStatus(category) {
    return new Promise(resolve => {
      let requestUrl = this.apiUrl + 'getStatus?category=' + category;
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
}