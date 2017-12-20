import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreateClaimPage } from '../create-claim/create-claim';
import { ClaimDetailPage } from '../claim-detail/claim-detail';
import { Claim } from '../../models/claim-model';
import { RestProvider } from '../../providers/rest/rest';
import { Status } from '../../models/status-model';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';


@IonicPage()
@Component({
  selector: 'page-claim-list',
  templateUrl: 'claim-list.html'
})
export class ClaimListPage {
  claims: Claim[] = [];
  statusList: string[];
  showType: Status = Status.PROCESSING;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public rest: RestProvider,
    public loadingCtrl: LoadingController) {
    // If absent, use ray
    this.initData();
  }

  initData() {
    let loginName = localStorage.getItem('loginName') || 'ray';
    this.statusList = Object.keys(Status).map(k => Status[k]);

    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      showBackdrop: true,
      content: 'Loading...'
    });
    loading.present();
    this.rest.getClaimList(loginName)
      .then((res: { status: string, content: Claim[] }) => {
        this.claims = res.content;
        loading.dismiss();
      })
      .catch(err => console.error(err));

  }

  createClaim() {
    this.navCtrl.push(CreateClaimPage);
  }

  openClaimDetail($event, claimDetail) {
    this.navCtrl.push(ClaimDetailPage, { data: claimDetail });
  }
}
