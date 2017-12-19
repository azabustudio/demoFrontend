import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreateClaimPage } from '../create-claim/create-claim';
import { ClaimDetailPage } from '../claim-detail/claim-detail';
import { Claim } from '../../models/claim-model';
import { RestProvider } from '../../providers/rest/rest';


@IonicPage()
@Component({
  selector: 'page-claim-list',
  templateUrl: 'claim-list.html',
})
export class ClaimListPage {
  title = 'Claim List Screen';
  claims: Claim[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    rest: RestProvider) {
    // If absent, use ray
    let loginName = localStorage.getItem('loginName') || 'ray';

    rest.getClaimList(loginName)
      .then((res: { status: string, content: Claim[] }) => this.claims = res.content)
      .catch(err => console.error(err));
  }

  createClaim() {
    this.navCtrl.push(CreateClaimPage);
  }

  openClaimDetail($event, claimDetail) {
    this.navCtrl.push(ClaimDetailPage, { data: claimDetail });
  }
}
