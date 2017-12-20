import { Login } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Login } from '../login/login';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { Subject } from 'rxjs/Subject';
import { Platform } from 'ionic-angular/platform/platform';

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
    public loadingCtrl: LoadingController
  ) {
  }

  logout() {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Loging out...'
    });
    loading.present();

    let subject = new Subject();
    localStorage.removeItem('loginName');
    // subject.subscribe(() => {
    //   loading.dismiss();
    // });
    // // fake loging out that takes 1.5sec
    // setTimeout(() => {
    //   subject.next();
    // }, 1500);
  }
}
