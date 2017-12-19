import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Login } from '../login/login';
import { ClaimDetailPage } from '../claim-detail/claim-detail';
import { Register } from '../../models/register-model';
import { ClaimListPage } from '../claim-list/claim-list';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { RestProvider } from '../../providers/rest/rest';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  title = 'Create new account ';
  registerInfo: Register = new Register();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public rest: RestProvider) {
  }

  register() {
    let loading = this.loadingCtrl.create({
      spinner: 'dots'
    });
    loading.present();
    this.rest.register(this.registerInfo)
      .then(function (res) {
        loading.dismiss();
        this.navCtrl.setRoot(Login);
      }.bind(this));
  }
}
