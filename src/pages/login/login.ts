import { FormGroup, FormControl, Validators } from '@angular/forms';
import { App } from 'ionic-angular/components/app/app';
import { MyApp } from './../../app/app.component';
import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ClaimListPage } from '../claim-list/claim-list';
import { RestProvider } from '../../providers/rest/rest';
import { UserAuthProvider } from '../../providers/userAuth/userAuth';
import { RegisterPage } from '../register/register';
import { ActionSheetController } from 'ionic-angular'
import { TabsPage } from '../tabs/tabs';
import { User } from '../../models/user-model';
import * as _ from 'lodash';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {
  formGroup: FormGroup;
  formErrors: any;
  validationMessages: any;
  title = 'Login Screen';
  userData = { "id": "ray", "password": "test" };

  constructor(
    public navCtrl: NavController,
    public restProvider: RestProvider,
    public userAuthProvider: UserAuthProvider,
    private alertCtrl: AlertController,
    private app: App,
    public loadingCtrl: LoadingController,
    public events: Events,
    public toast: ToastController) {
    this.bindingEvents();

    this.formGroup = new FormGroup({
      loginName: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });

    this.formErrors = {
      loginName: [],
      password: []
    };

    this.validationMessages = {
      'loginName': {
        'required': 'you must input your loginName'
      },
      'password': {
        'required': 'password shoulden\'t be empty'
      }
    };
  }

  ionViewDidLoad() {
    this.formGroup.valueChanges.subscribe(data => this.onValueChanged(data));
    console.log(this.events);
    this.events.subscribe('logout', ($event) => {
      this.navCtrl.setRoot(Login);
      let toast = this.toast.create({
        message: $event.type,
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
      this.events.unsubscribe('logout');
    });
  }

  onValueChanged(data?: any) {
    if (!this.formGroup) return;
    let formGroup = this.formGroup;
    _.forIn(this.formErrors, (value, key) => {
      this.formErrors[key] = [];
      this.formGroup[key] = '';
      let control = formGroup.get(key);

      if (control && control.dirty && !control.valid) {
        let messages = this.validationMessages[key];
        _.forIn(control.errors, (error, errorKey) => {
          this.formErrors[key].push(messages[errorKey]);
        });
      }
    });
  }

  bindingEvents() {
    // this.events.subscribe('logout', _ => this.app.getRootNav().setRoot(Login));
  }

  onSubmit(data: any): void {
    this.loginWith(data);
  }

  loginWith(data: any) {
    console.log('starting login');
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Logging you in...',
      showBackdrop: true,
      dismissOnPageChange: true
    });
    loading.present();
    this.userAuthProvider.signinUser(data.loginName, data.password)
      .then(res => {
        this.navCtrl.setRoot(TabsPage);
      }).catch(onRejected => {
        this.presentAlert();
        this.navCtrl.setRoot(Login);
      });
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Login failed!',
      subTitle: 'Please confirm your id and password!',
      buttons: ['Ok']
    });
    alert.present();
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }
}
