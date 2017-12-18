import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClaimResultPage } from '../claim-result/claim-result';
import { Claim } from '../../models/claim-model';


@IonicPage()
@Component({
  selector: 'page-create-claim',
  templateUrl: 'create-claim.html',
})
export class CreateClaimPage {

  title: string = '';
  claimData: Claim = new Claim();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  newClaim() {
    this.navCtrl.setRoot(ClaimResultPage, { claim: this.claimData });
  }

}
