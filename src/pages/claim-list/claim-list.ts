import { Claim } from './../../models/claim-model';
import { ActionButton } from './../../models/action-button-model';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreateClaimPage } from '../create-claim/create-claim';
import { ClaimDetailPage } from '../claim-detail/claim-detail';
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
  actionButtons: ActionButton[];

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
    this.initActionButtons();

    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      showBackdrop: false,
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

  initActionButtons() {
    let editButton = new ActionButton('EDIT', this.goToEdit, {
      statusList: [Status.PROCESSING],
      style: 'primary',
      icon: 'hammer'
    });
    let closeButton = new ActionButton('CLOSE', this.close, {
      statusList: [Status.PROCESSING, Status.PENDING],
      style: 'success',
      icon: 'checkmark'
    });
    let hideButton = new ActionButton('HIDE', this.hide, {
      statusList: [Status.CLOSED],
      style: 'lightprimary',
      icon: 'trash'
    });
    let openButton = new ActionButton('OPEN', this.open, {
      statusList: [Status.CLOSED, Status.PENDING],
      style: 'primary',
      icon: 'eye'
    });

    this.actionButtons = [editButton, closeButton, openButton, hideButton];
  }

  createClaim() {
    this.navCtrl.push(CreateClaimPage);
  }

  openClaimDetail($event, claim) {
    this.navCtrl.push(ClaimDetailPage, { data: claim });
  }

  /**
   * goto edit page
   * @param
   * @param claim
   */
  goToEdit($event, claim: Claim) { }

  /**
   * remove claim
   * @param
   * @param claim
   */
  hide($event: any, claim: Claim) {
    this.rest.removeClaim(claim.id);
  }

  /**
   * set claim to closed
   * @param
   * @param claim
   */
  close($event: any, claim: Claim) {
    $event.stopPropagation();
    claim.status = 'closed';
    this.rest.updateClaimStatus(claim.id, 'closed');
  }

  /**
   * set claim to processing
   * @param
   * @param claim
   */
  open($event: any, claim: Claim) {
    $event.stopPropagation();
    claim.status = 'processing';
    this.rest.updateClaimStatus(claim.id, 'processing');
  }

  show(action: any) {
    console.log(action);
  }
}
