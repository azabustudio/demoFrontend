import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Login } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  title = 'Regist Screen';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  register() {
    this.navCtrl.setRoot(Login);
  }

}
