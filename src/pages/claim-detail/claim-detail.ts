import { Claim } from './../../models/claim-model';
import { RestProvider } from './../../providers/rest/rest';
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
  title: string = 'Edit Claim'
  claim: Claim = new Claim();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public rest: RestProvider) {
    this.claim = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClaimDetailPage');
  }

  edit() {
    this.rest.updateClaim(this.claim)
      .then(_ => this.navCtrl.goToRoot(null),
      err => console.error(err));
  }
}
