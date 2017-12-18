import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreateClaimPage } from '../create-claim/create-claim';
import { ClaimDetailPage } from '../claim-detail/claim-detail';


@IonicPage()
@Component({
  selector: 'page-claim-list',
  templateUrl: 'claim-list.html',
})
export class ClaimListPage {
  title = 'Claim List Screen';
  claims = [
    { id: 11, name: 'Name A', status: 'In process', content: "This is a terrible product!" },
    { id: 12, name: 'Name B', status: 'Closed', content: "Best product ever!" },
    { id: 13, name: 'Name C', status: 'Pending', content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { id: 12, name: 'Name B', status: 'Closed', content: "Best product ever!" },
    { id: 12, name: 'Name B', status: 'Closed', content: "Best product ever!" },
    { id: 12, name: 'Name B', status: 'Closed', content: "Best product ever!" },
    { id: 12, name: 'Name B', status: 'Closed', content: "Best product ever!" },
    { id: 12, name: 'Name B', status: 'Closed', content: "Best product ever!" },
    { id: 12, name: 'Name B', status: 'Closed', content: "Best product ever!" },
    { id: 12, name: 'Name B', status: 'Closed', content: "Best product ever!" },
    { id: 12, name: 'Name B', status: 'Closed', content: "Best product ever!" },
    { id: 12, name: 'Name B', status: 'Closed', content: "Best product ever!" },
    { id: 12, name: 'Name B', status: 'Closed', content: "Best product ever!" }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // TODO loadClaim from dynamoDB
  }

  createClaim() {
    this.navCtrl.push(CreateClaimPage);
  }

  openClaimDetail($event, claimDetail) {
    this.navCtrl.push(ClaimDetailPage, { data: claimDetail });
  }
}
