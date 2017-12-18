import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ClaimDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-claim-detail',
  templateUrl: 'claim-detail.html',
})
export class ClaimDetailPage {

  claimDetail: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.claimDetail = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClaimDetailPage');
  }

}
