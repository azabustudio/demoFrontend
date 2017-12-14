import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreateClaimPage } from '../create-claim/create-claim';


@IonicPage()
@Component({
  selector: 'page-claim-list',
  templateUrl: 'claim-list.html',
})
export class ClaimListPage {
  title = 'Claim List Screen';
  claims = [
  { id: 11, name: 'Name A', status: 'In process' },
  { id: 12, name: 'Name B', status: 'Closed' },
  { id: 13, name: 'Name C', status: 'Pending' }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  createClaim() {
    this.navCtrl.push(CreateClaimPage);
  }
}
