import { MyPage } from './../my/my';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Login } from '../login/login';
import { RegisterPage } from '../register/register';
import { ClaimListPage } from '../claim-list/claim-list';
import { SearchPage } from '../search/search';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  claimList: any;
  search: any;
  my: any;

  constructor() {
    this.claimList = ClaimListPage;
    this.search = SearchPage;
    this.my = MyPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
