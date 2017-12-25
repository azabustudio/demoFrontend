import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClaimResultPage } from '../claim-result/claim-result';
import { Claim } from '../../models/claim-model';
import { RestProvider } from '../../providers/rest/rest';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';


@IonicPage()
@Component({
  selector: 'page-create-claim',
  templateUrl: 'create-claim.html',
})
export class CreateClaimPage {

  title: string = '';
  claimData: Claim = new Claim();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public rest: RestProvider,
    public loadingCtrl: LoadingController) {
  }

  newClaim() {
    let loading = this.loadingCtrl.create({
      content: 'updating..',
      spinner: 'dots'
    });
    this.claimData.loginName = localStorage.getItem('loginName');
    loading.present();
    this.rest.addClaim(this.claimData)
      .then((res: { status: string, claim: Claim }) => {
        console.log(res);
        loading.dismiss();
        this.navCtrl.setRoot(ClaimResultPage, { claim: res.claim });
      });
  }

}
