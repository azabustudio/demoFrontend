import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClaimResultPage } from '../claim-result/claim-result';


@IonicPage()
@Component({
  selector: 'page-create-claim',
  templateUrl: 'create-claim.html',
})
export class CreateClaimPage {
  
  title = 'Create Claim Screen';
  claimData = {"id": "","name": "","category":"A"};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  newClaim() {
    this.navCtrl.setRoot(ClaimResultPage, { claim : this.claimData});
  }

}
