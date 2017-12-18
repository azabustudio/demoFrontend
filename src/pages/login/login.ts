import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
import { ClaimListPage } from '../claim-list/claim-list';
import { RestProvider } from '../../providers/rest/rest';
import { RegisterPage } from '../register/register';
import { ActionSheetController } from 'ionic-angular'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {
  title = 'Login Screen';
  userData = { "id": "ray", "password": "test" };

  constructor(
    public navCtrl: NavController,
    public restProvider: RestProvider,
    private alertCtrl: AlertController) {

  }

  login() {
    this.restProvider.login(this.userData.id, this.userData.password)
      .then(data => {
        if ((data as any).status === "success") {
          this.navCtrl.setRoot(ClaimListPage);
        } else {
          this.presentAlert()
        }
      });
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Login failed!',
      subTitle: 'Please confirm your id and password!',
      buttons: ['Ok']
    });
    alert.present();
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }
}
