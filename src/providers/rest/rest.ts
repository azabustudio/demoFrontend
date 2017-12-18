import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable()
export class RestProvider {

  // TODO: Need to modify after AWS instance setting up.
  apiUrl = 'http://localhost:8080/';

  constructor(public http: HttpClient) {
  }

  getStatus(category) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'getStatus?category=' + category).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  login(id, password) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'login?username=' + id + '&password=' + password).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}