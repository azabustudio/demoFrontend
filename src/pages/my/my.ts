import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Login } from '../login/login';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { Subject } from 'rxjs/Subject';
import { Platform } from 'ionic-angular/platform/platform';
import { UserAuthProvider } from '../../providers/userAuth/userAuth';

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

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public userAuth: UserAuthProvider
  ) {
  }

  logout() {
    
    this.userAuth.logoutUser(this.name)
      .then((res) => {
        this.navCtrl.setRoot(Login);
      });
  }
}
