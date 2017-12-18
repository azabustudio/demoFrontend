webpackJsonp([8],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyPage = (function () {
    function MyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyPage');
    };
    MyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my',template:/*ion-inline-start:"E:\Develop\Workspace\demo\demoFrontend\src\pages\my\my.html"*/'<!--\n  Generated template for the MyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title noScroll>My Page</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card class="my-profile">\n    <ion-list no-lines>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="../../assets/avatars/testAvatar.png">\n        </ion-avatar>\n        <h2>My Page</h2>\n        <p>View</p>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n\n  <ion-card class="myFunction">\n    <ion-list>\n      <button ion-item>\n        <ion-icon name="analytics" item-start></ion-icon>\n        My Analystics\n      </button>\n      <button ion-item>\n        <ion-icon name="mail" item-start></ion-icon>\n        My Notifications\n      </button>\n      <button ion-item>\n        <ion-icon name="help" item-start></ion-icon>\n        Help\n      </button>\n    </ion-list>\n  </ion-card>\n\n  <ion-card class="myFunction">\n    <ion-list>\n      <button ion-item>\n        <ion-icon name="log-out" item-start></ion-icon>\n        Logout\n      </button>\n    </ion-list>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"E:\Develop\Workspace\demo\demoFrontend\src\pages\my\my.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MyPage);
    return MyPage;
}());

//# sourceMappingURL=my.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaimDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ClaimDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClaimDetailPage = (function () {
    function ClaimDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.claimDetail = navParams.get('data');
    }
    ClaimDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClaimDetailPage');
    };
    ClaimDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-claim-detail',template:/*ion-inline-start:"E:\Develop\Workspace\demo\demoFrontend\src\pages\claim-detail\claim-detail.html"*/'<!--\n\n  Generated template for the ClaimDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{claimDetail.name}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding noScroll>\n\n  <ion-card>\n\n\n\n    <ion-card-content>\n\n      {{claimDetail.content}}\n\n    </ion-card-content>\n\n\n\n  </ion-card>\n\n  <button (click)="edit(claimDetail)"></button>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Develop\Workspace\demo\demoFrontend\src\pages\claim-detail\claim-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ClaimDetailPage);
    return ClaimDetailPage;
}());

//# sourceMappingURL=claim-detail.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateClaimPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__claim_result_claim_result__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_claim_model__ = __webpack_require__(163);
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
        this.title = '';
        this.claimData = new __WEBPACK_IMPORTED_MODULE_3__models_claim_model__["a" /* Claim */]();
    }
    CreateClaimPage.prototype.newClaim = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__claim_result_claim_result__["a" /* ClaimResultPage */], { claim: this.claimData });
    };
    CreateClaimPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-claim',template:/*ion-inline-start:"E:\Develop\Workspace\demo\demoFrontend\src\pages\create-claim\create-claim.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      {{title}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="appBackground; no-scroll">\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <h1 align="">New Claim</h1>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label floating>Claim Id</ion-label>\n\n      <ion-input type="text" [(ngModel)]="claimData.id"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Claim Name</ion-label>\n\n      <ion-input type="text" [(ngModel)]="claimData.name"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating></ion-label>\n\n      <ion-select [(ngModel)]="claimData.category">\n\n        <ion-option value="A">Product</ion-option>\n\n        <ion-option value="B">Delivery</ion-option>\n\n        <ion-option value="C">Service</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button full color="success" (click)="newClaim()">Confirm</button>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Develop\Workspace\demo\demoFrontend\src\pages\create-claim\create-claim.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CreateClaimPage);
    return CreateClaimPage;
}());

//# sourceMappingURL=create-claim.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaimResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__claim_list_claim_list__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_claim_model__ = __webpack_require__(163);
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
        this.claimData = new __WEBPACK_IMPORTED_MODULE_4__models_claim_model__["a" /* Claim */]();
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
            selector: 'page-claim-result',template:/*ion-inline-start:"E:\Develop\Workspace\demo\demoFrontend\src\pages\claim-result\claim-result.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      {{title}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="appBackground; no-scroll">\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <h1 align="">Claim Status Confirm</h1>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Claim Name</ion-label>\n\n      <ion-label>{{claimData.name}}</ion-label>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Status</ion-label>\n\n      <ion-label>{{status}}</ion-label>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Claim Id</ion-label>\n\n      <ion-label>{{claimData.id}}</ion-label>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n  <button ion-button full color="success" (click)="backToList()">Back to Claim List</button>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Develop\Workspace\demo\demoFrontend\src\pages\claim-result\claim-result.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]])
    ], ClaimResultPage);
    return ClaimResultPage;
}());

//# sourceMappingURL=claim-result.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = (function () {
    function SearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"E:\Develop\Workspace\demo\demoFrontend\src\pages\search\search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title center>Search</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="appBackground; no-scroll">\n  <ion-searchbar>\n  </ion-searchbar>\n</ion-content>\n'/*ion-inline-end:"E:\Develop\Workspace\demo\demoFrontend\src\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/claim-detail/claim-detail.module": [
		289,
		7
	],
	"../pages/claim-list/claim-list.module": [
		290,
		6
	],
	"../pages/claim-result/claim-result.module": [
		291,
		5
	],
	"../pages/create-claim/create-claim.module": [
		292,
		4
	],
	"../pages/my/my.module": [
		293,
		3
	],
	"../pages/register-confirm/register-confirm.module": [
		296,
		0
	],
	"../pages/register/register.module": [
		294,
		2
	],
	"../pages/search/search.module": [
		295,
		1
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
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Claim; });
var Claim = (function () {
    function Claim() {
        this.category = 'A';
    }
    return Claim;
}());

//# sourceMappingURL=claim-model.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(79);
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
        this.userData = { "id": "ray", "password": "test" };
    }
    Login.prototype.login = function () {
        var _this = this;
        this.restProvider.login(this.userData.id, this.userData.password)
            .then(function (data) {
            if (data.status === "success") {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
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
    Login.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    Login = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\Develop\Workspace\demo\demoFrontend\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      {{title}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="appBackground; no-scroll">\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <h1 align="">Welcome to our App</h1>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-item>\n\n    <ion-label floating>Login id</ion-label>\n\n    <ion-input type="text" [(ngModel)]="userData.id"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>Password</ion-label>\n\n    <ion-input type="password" [(ngModel)]="userData.password"></ion-input>\n\n  </ion-item>\n\n\n\n  <button ion-button full color="primary" (click)="login()">Login</button>\n\n  <button ion-button full color="lightprimary" (click)="register()">Register</button>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Develop\Workspace\demo\demoFrontend\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Login);
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_register_model__ = __webpack_require__(261);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = 'Create new account ';
        this.registerInfo = new __WEBPACK_IMPORTED_MODULE_3__models_register_model__["a" /* Register */]();
    }
    RegisterPage.prototype.register = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* Login */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"E:\Develop\Workspace\demo\demoFrontend\src\pages\register\register.html"*/'<ion-header>\n\n  <ion-navbar>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="appBackground; no-scroll">\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <h1>Input your information</h1>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label floating>Login id</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Password</ion-label>\n\n      <ion-input type="password" [(ngModel)]="register.password"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Password confirm</ion-label>\n\n      <ion-input type="password" [(ngModel)]="register.passwordConfirm"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Last name</ion-label>\n\n      <ion-input type="text" [(ngModel)]="register.lastName"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>First name</ion-label>\n\n      <ion-input type="text" [(ngModel)]="register.lastName"></ion-input>\n\n    </ion-item>\n\n\n\n\n\n    <button ion-button full (click)="register($event)">Register</button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Develop\Workspace\demo\demoFrontend\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_my_my__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_search_search__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_claim_list_claim_list__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_create_claim_create_claim__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_claim_result_claim_result__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_claim_detail_claim_detail__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_rest_rest__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// 画面用コンポネント






// ビジネスロジック

// REST API 通信用。


var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_9__pages_claim_list_claim_list__["a" /* ClaimListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_create_claim_create_claim__["a" /* CreateClaimPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_claim_result_claim_result__["a" /* ClaimResultPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_claim_detail_claim_detail__["a" /* ClaimDetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_my_my__["a" /* MyPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/claim-detail/claim-detail.module#ClaimDetailPageModule', name: 'ClaimDetailPage', segment: 'claim-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/claim-list/claim-list.module#ClaimListPageModule', name: 'ClaimListPage', segment: 'claim-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/claim-result/claim-result.module#ClaimResultPageModule', name: 'ClaimResultPage', segment: 'claim-result', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-claim/create-claim.module#CreateClaimPageModule', name: 'CreateClaimPage', segment: 'create-claim', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/my.module#MyPageModule', name: 'MyPage', segment: 'my', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register-confirm/register-confirm.module#RegisterConfirmPageModule', name: 'RegisterConfirmPage', segment: 'register-confirm', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_9__pages_claim_list_claim_list__["a" /* ClaimListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_create_claim_create_claim__["a" /* CreateClaimPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_claim_result_claim_result__["a" /* ClaimResultPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_claim_detail_claim_detail__["a" /* ClaimDetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_my_my__["a" /* MyPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_rest_rest__["a" /* RestProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_model__ = __webpack_require__(262);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Register = (function (_super) {
    __extends(Register, _super);
    function Register() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Register;
}(__WEBPACK_IMPORTED_MODULE_0__user_model__["a" /* User */]));

//# sourceMappingURL=register-model.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user-model.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(79);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Develop\Workspace\demo\demoFrontend\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"E:\Develop\Workspace\demo\demoFrontend\src\app\app.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_claim_create_claim__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__claim_detail_claim_detail__ = __webpack_require__(103);
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
        // TODO loadClaim from dynamoDB
    }
    ClaimListPage.prototype.createClaim = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__create_claim_create_claim__["a" /* CreateClaimPage */]);
    };
    ClaimListPage.prototype.openClaimDetail = function ($event, claimDetail) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__claim_detail_claim_detail__["a" /* ClaimDetailPage */], { data: claimDetail });
    };
    ClaimListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-claim-list',template:/*ion-inline-start:"E:\Develop\Workspace\demo\demoFrontend\src\pages\claim-list\claim-list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      {{title}}\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="createClaim()">\n\n        <ion-icon name="create"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="appBackground;">\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let claim of claims" (click)="openClaimDetail($event, claim)">\n\n      <ion-item>\n\n        <h2>{{claim.name}}</h2>\n\n        <p>{{claim.content}}</p>\n\n      </ion-item>\n\n      <ion-item-options side="right">\n\n        <button ion-button color="light">\n\n          <ion-icon name="cross"></ion-icon>\n\n          Delete\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Develop\Workspace\demo\demoFrontend\src\pages\claim-list\claim-list.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(162);
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

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__my_my__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__claim_list_claim_list__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = (function () {
    function TabsPage() {
        this.claimList = __WEBPACK_IMPORTED_MODULE_2__claim_list_claim_list__["a" /* ClaimListPage */];
        this.search = __WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */];
        this.my = __WEBPACK_IMPORTED_MODULE_0__my_my__["a" /* MyPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"E:\Develop\Workspace\demo\demoFrontend\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab tabIcon="paper" tabTitle="Claims" [root]="claimList"></ion-tab>\n\n  <ion-tab tabIcon="search" tabTitle="Search" [root]="search"></ion-tab>\n\n  <ion-tab tabIcon="person" tabTitle="My" [root]="my"></ion-tab>\n\n</ion-tabs>`\n\n'/*ion-inline-end:"E:\Develop\Workspace\demo\demoFrontend\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map