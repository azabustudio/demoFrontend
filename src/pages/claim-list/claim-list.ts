import { ClaimDetailPage } from './../claim-detail/claim-detail';
import { Claim } from './../../models/claim-model';
import { ActionButton } from './../../models/action-button-model';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CreateClaimPage } from '../create-claim/create-claim';
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
  statusList: string[] = Object.keys(Status).map(k => Status[k]);
  showType: Status = Status.PROCESSING;
  actionButtons: ActionButton[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public rest: RestProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {
    // If absent, use ray
  }

  initData() {
    let loginName = localStorage.getItem('loginName') || 'ray';
    this.initActionButtons();

    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      showBackdrop: true,
      content: 'Loading claims...',
      dismissOnPageChange: true
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
    let pendButton = new ActionButton('PEND', this.pend, {
      statusList: [Status.PROCESSING],
      style: 'energy',
      icon: 'hand'
    });

    let closeButton = new ActionButton('CLOSE', this.close, {
      statusList: [Status.PROCESSING, Status.PENDING],
      style: 'success',
      icon: 'square'
    });
    // let hideButton = new ActionButton('HIDE', this.hide, {
    //   statusList: [Status.CLOSED],
    //   style: 'lightprimary',
    //   icon: 'trash'
    // });
    let openButton = new ActionButton('OPEN', this.open, {
      statusList: [Status.CLOSED, Status.PENDING],
      style: 'primary',
      icon: 'play'
    });
    let deactivateButton = new ActionButton('DEACTIVATE', this.deactivate, {
      statusList: [Status.CLOSED],
      style: 'lightprimary',
      icon: 'eye-off'
    });

    this.actionButtons = [editButton, closeButton, openButton, pendButton, deactivateButton];
  }

  ionViewWillEnter() {
    this.initData();
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
  goToEdit($event, claim: Claim) {
    $event.stopPropagation();
    this.navCtrl.push(ClaimDetailPage, { data: claim });
  }

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
    let confirm = this.alertCtrl.create({
      title: 'Close Confirmation',
      message: 'Are you sure to close this claim?',
      buttons: [
        {
          text: 'Yes',
          handler: _ => {
            claim.status = 'closed';
            this.rest.updateClaim(claim);
          }
        },
        {
          text: 'No'
        }
      ]
    });
    confirm.present();
  }

  /**
   * set claim to closed
   * @param
   * @param claim
   */
  pend($event: any, claim: Claim) {
    $event.stopPropagation();
    let confirm = this.alertCtrl.create({
      title: 'Pend Confirmation',
      message: 'Are you sure to pend this claim?',
      buttons: [
        {
          text: 'Yes',
          handler: _ => {
            claim.status = 'pending';
            this.rest.updateClaim(claim);
          }
        },
        {
          text: 'No'
        }
      ]
    });
    confirm.present();
  }


  /**
   * set claim to processing
   * @param
   * @param claim
   */
  open($event: any, claim: Claim) {
    $event.stopPropagation();
    let confirm = this.alertCtrl.create({
      title: 'Open Confirmation',
      message: 'Are you sure to open this claim?',
      buttons: [
        {
          text: 'Yes',
          handler: _ => {
            claim.status = 'processing';
            this.rest.updateClaim(claim);
          }
        },
        {
          text: 'No'
        }
      ]
    });
    confirm.present();
  }



  deactivate($event: any, claim: Claim) {
    $event.stopPropagation();
    let confirm = this.alertCtrl.create({
      title: 'Hide Confirmation',
      message: 'Are you sure to hide this claim?',
      buttons: [
        {
          text: 'Yes',
          handler: _ => {
            claim.active = false;
            this.rest.updateClaim(claim);
          }
        },
        {
          text: 'No'
        }
      ]
    });
    confirm.present();
  }

  show(action: any) {
    console.log(action);
  }
}
