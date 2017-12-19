import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Login } from '../login/login';

/**
 * Generated class for the MyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {

  name: string = localStorage.getItem('loginName');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // logout() {
  //   localStorage.removeItem('loginName');
  //   this.navCtrl.setRoot(Login);
  // }
}
