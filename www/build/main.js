webpackJsonp([3],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateClaimPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__claim_result_claim_result__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateClaimPage = (function () {
    function CreateClaimPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = 'Create Claim Screen';
        this.claimData = { "id": "", "name": "", "category": "A" };
    }
    CreateClaimPage.prototype.newClaim = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__claim_result_claim_result__["a" /* ClaimResultPage */], { claim: this.claimData });
    };
    CreateClaimPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-claim',template:/*ion-inline-start:"C:\Develop\claimDemo\demoFrontend\src\pages\create-claim\create-claim.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      {{title}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="appBackground; no-scroll">\n\n	<ion-grid>\n\n	  <ion-row>\n\n	    <ion-col>\n\n	      <h1 align="">New Claim</h1>\n\n      </ion-col>\n\n	  </ion-row>\n\n	</ion-grid>\n\n\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label fixed>Claim Id</ion-label>\n\n      <ion-input type="text" [(ngModel)]="claimData.id"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Claim Name</ion-label>\n\n      <ion-input type="text" [(ngModel)]="claimData.name"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Category</ion-label>\n\n      <ion-select [(ngModel)]="claimData.category">\n\n        <ion-option value="A">Type A</ion-option>\n\n        <ion-option value="B">Type B</ion-option>\n\n        <ion-option value="C">Type C</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button full color="success" (click)="newClaim()">New Claim</button>\n\n</ion-content>'/*ion-inline-end:"C:\Develop\claimDemo\demoFrontend\src\pages\create-claim\create-claim.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CreateClaimPage);
    return CreateClaimPage;
}());

//# sourceMappingURL=create-claim.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaimResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__claim_list_claim_list__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClaimResultPage = (function () {
    function ClaimResultPage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.title = 'Claim Staus Screen';
        this.claimData = { "id": "", "name": "", "category": "" };
        this.status = '';
        this.claimData = navParams.get("claim");
        this.getStatus();
    }
    ClaimResultPage.prototype.backToList = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__claim_list_claim_list__["a" /* ClaimListPage */]);
    };
    ClaimResultPage.prototype.getStatus = function () {
        var _this = this;
        this.restProvider.getStatus(this.claimData.category).then(function (data) {
            _this.status = data.content;
        });
    };
    ClaimResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-claim-result',template:/*ion-inline-start:"C:\Develop\claimDemo\demoFrontend\src\pages\claim-result\claim-result.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      {{title}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="appBackground; no-scroll">\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <h1 align="">Claim Status Confirm</h1>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label fixed>Claim Id</ion-label>\n\n      <ion-label >{{claimData.id}}</ion-label>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Claim Name</ion-label>\n\n      <ion-label>{{claimData.name}}</ion-label>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Status</ion-label>\n\n      <ion-label>{{status}}</ion-label>\n\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button full color="success" (click)="backToList()">Back to Claim List</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Develop\claimDemo\demoFrontend\src\pages\claim-result\claim-result.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]])
    ], ClaimResultPage);
    return ClaimResultPage;
}());

//# sourceMappingURL=claim-result.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/claim-detail/claim-detail.module": [
		284,
		1
	],
	"../pages/claim-list/claim-list.module": [
		281,
		10
	],
	"../pages/claim-result/claim-result.module": [
		282,
		9
	],
	"../pages/create-claim/create-claim.module": [
		283,
		2
	],
	"../pages/register/register.module": [
		286,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__claim_list_claim_list__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Login = (function () {
    function Login(navCtrl, restProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.restProvider = restProvider;
        this.alertCtrl = alertCtrl;
        this.title = 'Login Screen';
        this.userData = { "id": "", "password": "" };
    }
    Login.prototype.login = function () {
        var _this = this;
        this.restProvider.login(this.userData.id, this.userData.password)
            .then(function (data) {
            if (data.status === "success") {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__claim_list_claim_list__["a" /* ClaimListPage */]);
            }
            else {
                _this.presentAlert();
            }
        });
    };
    Login.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Login failed!',
            subTitle: 'Please confirm your id and password!',
            buttons: ['Ok']
        });
        alert.present();
    };
    Login = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Develop\claimDemo\demoFrontend\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      {{title}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="appBackground; no-scroll">\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <h1 align="">Welcome to our App</h1>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label floating>Login id</ion-label>\n\n      <ion-input type="text" [(ngModel)]="userData.id"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Password</ion-label>\n\n      <ion-input type="password" [(ngModel)]="userData.password"></ion-input>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <button ion-button block full primary (click)="login()">Login</button>\n\n  <button ion-button block full color="secondary" (click)="register()">Regist Page</button>\n\n</ion-content>'/*ion-inline-end:"C:\Develop\claimDemo\demoFrontend\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Login);
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_claim_list_claim_list__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_create_claim_create_claim__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_claim_result_claim_result__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_rest_rest__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_7__pages_claim_list_claim_list__["a" /* ClaimListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_create_claim_create_claim__["a" /* CreateClaimPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_claim_result_claim_result__["a" /* ClaimResultPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/claim-list/claim-list.module#ClaimListPageModule', name: 'ClaimListPage', segment: 'claim-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/claim-result/claim-result.module#ClaimResultPageModule', name: 'ClaimResultPage', segment: 'claim-result', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-claim/create-claim.module#CreateClaimPageModule', name: 'CreateClaimPage', segment: 'create-claim', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_7__pages_claim_list_claim_list__["a" /* ClaimListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_create_claim_create_claim__["a" /* CreateClaimPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_claim_result_claim_result__["a" /* ClaimResultPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__providers_rest_rest__["a" /* RestProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* Login */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Develop\claimDemo\demoFrontend\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Develop\claimDemo\demoFrontend\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaimListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_claim_create_claim__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClaimListPage = (function () {
    function ClaimListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = 'Claim List Screen';
        this.claims = [
            { id: 11, name: 'Name A', status: 'In process' },
            { id: 12, name: 'Name B', status: 'Closed' },
            { id: 13, name: 'Name C', status: 'Pending' }
        ];
    }
    ClaimListPage.prototype.createClaim = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__create_claim_create_claim__["a" /* CreateClaimPage */]);
    };
    ClaimListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-claim-list',template:/*ion-inline-start:"C:\Develop\claimDemo\demoFrontend\src\pages\claim-list\claim-list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      {{title}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="appBackground; no-scroll">\n\n  <!-- <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <h1 align="">Claim status list</h1>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-list>\n\n    <ion-item style="background-color: #86b0f8">\n\n      <ion-label>ID</ion-label>\n\n      <ion-label>Name</ion-label>\n\n      <ion-label>Status</ion-label>\n\n    </ion-item>\n\n    <ion-item *ngFor="let claim of claims">\n\n      <ion-label>{{claim.id}}</ion-label>\n\n      <ion-label>{{claim.name}}</ion-label>\n\n      <ion-label>{{claim.status}}</ion-label>\n\n    </ion-item>\n\n  </ion-list> -->\n\n  <button ion-button full color="success" (click)="createClaim()">Create New Claim</button>\n\n\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let claim of claims" (click)="openClaimDetail($event, claim)">\n\n      <ion-item>\n\n        <h2>{{claim.name}}</h2>\n\n        <p>{{claim.content}}</p>\n\n      </ion-item>\n\n      <ion-item-options side="right">\n\n        <button ion-button color="light">\n\n          <ion-icon name="cross"></ion-icon>\n\n          Delete\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Develop\claimDemo\demoFrontend\src\pages\claim-list\claim-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ClaimListPage);
    return ClaimListPage;
}());

//# sourceMappingURL=claim-list.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RestProvider = (function () {
    function RestProvider(http) {
        this.http = http;
        // TODO: Need to modify after AWS instance setting up.
        this.apiUrl = 'http://localhost:8080/';
    }
    RestProvider.prototype.getStatus = function (category) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + 'getStatus?category=' + category).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.login = function (id, password) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + 'login?username=' + id + '&password=' + password).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map