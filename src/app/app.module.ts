import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

// 画面用コンポネント
import { Login } from '../pages/login/login';
import { ClaimListPage } from '../pages/claim-list/claim-list';
import { CreateClaimPage } from '../pages/create-claim/create-claim';
import { ClaimResultPage } from '../pages/claim-result/claim-result';
import { RegisterPage } from '../pages/register/register';

// ビジネスロジック
import { RestProvider } from '../providers/rest/rest';

// REST API 通信用。
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    Login,
    ClaimListPage,
    CreateClaimPage,
    ClaimResultPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    ClaimListPage,
    CreateClaimPage,
    ClaimResultPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
