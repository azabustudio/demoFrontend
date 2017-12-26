import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Login } from '../login/login';
import { ClaimDetailPage } from '../claim-detail/claim-detail';
import { Register } from '../../models/register-model';
import { ClaimListPage } from '../claim-list/claim-list';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { RestProvider } from '../../providers/rest/rest';
import * as _ from 'lodash'

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  title = 'Create new account ';
  formGroup: FormGroup;
  formErrors: any;
  validationMessages: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public rest: RestProvider) {
    this.initFormGroup();
  }

  initFormGroup() {
    let reg = new RegExp(/^(?=.*[A-Z])(?=.*[!"#$%&'()\*\+\-\.,\/:;<=>?@\[\\\]^_`{|}~])/);
    this.formGroup = new FormGroup({
      loginName: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(6),
        Validators.pattern(reg)
      ])),
      passwordConfirm: new FormControl('', Validators.compose([
        Validators.required
      ])),
      lastName: new FormControl(''),
      firstName: new FormControl('')
    });

    this.formErrors = {
      loginName: [],
      password: [],
      passwordConfirm: []
    };

    this.validationMessages = {
      loginName: {
        'required': 'LoginName should not be empty'
      },
      password: {
        'required': 'Password should not be empty',
        'minlength': 'Password should have at least 4 characters',
        'maxlength': 'Password should have at most 6 characters',
        'pattern': 'Password should contains at least one CAPTIAL and one symbole'
      },
      passwordConfirm: {
        'required': 'Please confirm your password',
        'validateEqual': 'Your password confirm is different from your password'
      }
    }

    this.formGroup.valueChanges.subscribe(data => this.onValueChanged(data));
  }

  onValueChanged(data: any) {
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

  onSubmit(data: Register): void {
    this.register(data);
  }


  register(data) {
    let loading = this.loadingCtrl.create({
      spinner: 'dots'
    });
    loading.present();
    console.log(data);
    this.rest.register(data)
      .then(function (res) {
        loading.dismiss();
        this.navCtrl.setRoot(Login);
      }.bind(this));
  }
}
