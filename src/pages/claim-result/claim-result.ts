import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClaimListPage } from '../claim-list/claim-list';
import { RestProvider } from '../../providers/rest/rest';
import { Claim } from '../../models/claim-model';

@IonicPage()
@Component({
  selector: 'page-claim-result',
  templateUrl: 'claim-result.html',
})
export class ClaimResultPage {
  title: string = 'Claim Staus Screen';
  claimData: Claim = new Claim();
  status: string = '';

  constructor(public navCtrl: NavController,
    public navParams: NavParams, public restProvider: RestProvider) {
    this.claimData = navParams.get("claim");

    this.getStatus();
  }

  backToList() {
    this.navCtrl.setRoot(ClaimListPage);
  }

  getStatus() {
    this.restProvider.getStatus(this.claimData.category).then(data => {
      this.status = (data as any).content;
    });
  }
}
