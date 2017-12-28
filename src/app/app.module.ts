import { StatusFilterPipe } from './../pipes/status-filter/status-filter';
import { MyPage } from './../pages/my/my';
import { SearchPage } from './../pages/search/search';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MyApp } from './app.component';

// 画面用コンポネント
import { Login } from '../pages/login/login';
import { ClaimListPage } from '../pages/claim-list/claim-list';
import { CreateClaimPage } from '../pages/create-claim/create-claim';
import { ClaimResultPage } from '../pages/claim-result/claim-result';
import { RegisterPage } from '../pages/register/register';
import { ClaimDetailPage } from '../pages/claim-detail/claim-detail';

// ビジネスロジック
import { RestProvider } from '../providers/rest/rest';
import { UserAuthProvider } from '../providers/userAuth/userAuth';
import { TokenInterceptor } from '../providers/session/token.interceptor';
import { ErrorInterceptor } from '../providers/session/error.interceptor';
// REST API 通信用。
import { HttpClientModule } from '@angular/common/http';
import { TabsPage } from '../pages/tabs/tabs';
import { EqualValidator } from '../directives/equal-validator/equal-validator';

@NgModule({
  declarations: [
    MyApp,
    Login,
    ClaimListPage,
    CreateClaimPage,
    ClaimResultPage,
    ClaimDetailPage,
    RegisterPage,
    TabsPage,
    SearchPage,
    MyPage,
    StatusFilterPipe,
    EqualValidator
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
    ClaimDetailPage,
    RegisterPage,
    TabsPage,
    SearchPage,
    MyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    RestProvider,
    StatusFilterPipe,
    UserAuthProvider,
    TokenInterceptor,
    ErrorInterceptor
  ]
})
export class AppModule { }
