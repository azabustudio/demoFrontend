import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Login } from '../login/login';
import { ClaimDetailPage } from '../claim-detail/claim-detail';
import { Register } from '../../models/register-model';
import { ClaimListPage } from '../claim-list/claim-list';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  title = 'Create new account ';
  registerInfo: Register = new Register();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  register() {
    this.navCtrl.setRoot(Login);
  }
}
