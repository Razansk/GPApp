webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.openLoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.openSignupPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up__["a" /* SignUpPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\home\home.html"*/'\n\n<ion-content  padding-vertical>\n  <img  src="../assets/img/kessa.png" >\n  <button ion-button full color="secondary" (click)="openLoginPage()"> Login</button>\n  <button ion-button full color="secondary" (click)="openSignupPage()"> Sign up</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthProvider = (function () {
    function AuthProvider(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    AuthProvider.prototype.checkAuthentication = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //Load token if exists
            _this.storage.get('token').then(function (value) {
                _this.token = value;
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                headers.append('Authorization', _this.token);
                _this.http.get('https://kessa.herokuapp.com/api/auth/protected', { headers: headers })
                    .subscribe(function (res) {
                    resolve(res);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    AuthProvider.prototype.createAccount = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post('https://kessa.herokuapp.com/api/auth/register', JSON.stringify(details), { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                _this.token = data.token;
                _this.storage.set('token', data.token);
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.login = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post('https://kessa.herokuapp.com/api/auth/login', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                _this.token = data.token;
                _this.storage.set('token', data.token);
                resolve(data);
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.logout = function () {
        this.storage.set('token', '');
    };
    return AuthProvider;
}());
AuthProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], AuthProvider);

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_arrivals_new_arrivals__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__d_tabs_d_tabs__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignUpPage = (function () {
    function SignUpPage(navCtrl, authService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
    }
    SignUpPage.prototype.register = function () {
        var _this = this;
        this.showLoader();
        var details = {
            name: this.name,
            email: this.email,
            phone: this.phone,
            password: this.password,
            role: this.role
        };
        this.authService.createAccount(details).then(function (result) {
            _this.loading.dismiss();
            if (_this.role === 1)
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__new_arrivals_new_arrivals__["a" /* NewArrivalsPage */]);
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__d_tabs_d_tabs__["a" /* DTabsPage */]);
            }
            console.log(result);
        }, function (err) {
            _this.loading.dismiss();
        });
    };
    SignUpPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Registering...'
        });
        this.loading.present();
    };
    return SignUpPage;
}());
SignUpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sign-up',template:/*ion-inline-start:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\sign-up\sign-up.html"*/'<!--\n\n  Generated template for the SignUpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title class="toolbar">Sign Up</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content  padding-vertical>\n\n  \n\n  <ion-list >\n\n      <ion-item >\n\n          <ion-label>Name:</ion-label>\n\n          <ion-input [(ngModel)]="name"floating type="text" placeholder="Ghada Abdulaziz" ngDefaultControl > </ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-label>Email:</ion-label>\n\n          <ion-input [(ngModel)]="email" floating type="email" placeholder="******@*****.com" ngDefaultControl ></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-label>Phone:</ion-label>\n\n          <ion-input [(ngModel)]="phone" floating type="phone" placeholder="+96655*******" ngDefaultControl>Phone:</ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item >\n\n          <ion-label>Password:</ion-label>\n\n          <ion-input [(ngModel)]="password" floating type="password" placeholder="Password" ngDefaultControl></ion-input>\n\n      </ion-item >\n\n  </ion-list>\n\n  \n\n  <br />\n\n \n\n <div>\n\n     <button ion-button [(ngModel)]="role" value="2" full color="secondary" (click)="register()" ngDefaultControl> Designer</button> \n\n     <p>or</p>\n\n     <button ion-button [(ngModel)]="role" value="1" full color="secondary" (click)="register()" ngDefaultControl > Customer</button>\n\n  </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\sign-up\sign-up.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
], SignUpPage);

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collection_collection__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__d_orders_d_orders__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_item_new_item__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__d_profile_d_profile__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


;



var DTabsPage = (function () {
    function DTabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__collection_collection__["a" /* CollectionPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__d_orders_d_orders__["a" /* DOrdersPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__new_item_new_item__["a" /* NewItemPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__d_profile_d_profile__["a" /* DProfilePage */];
    }
    return DTabsPage;
}());
DTabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\d-tabs\d-tabs.html"*/'<ion-tabs cless="tabs" [color]=" \'danger\' ">\n  <ion-tab cless="tabs" [root]="tab1Root" tabTitle="Collection" tabIcon="md-albums"></ion-tab>\n  <ion-tab cless="tabs" [root]="tab2Root" tabTitle="Orders" tabIcon="md-copy"></ion-tab>\n  <ion-tab cless="tabs" [root]="tab3Root" tabTitle="New Kessa" tabIcon="md-add"></ion-tab>\n  <ion-tab cless="tabs" [root]="tab4Root" tabTitle="Profile" tabIcon="ios-contact-outline"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\d-tabs\d-tabs.html"*/,
    }),
    __metadata("design:paramtypes", [])
], DTabsPage);

//# sourceMappingURL=d-tabs.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sign_up_sign_up__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_arrivals_new_arrivals__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, loadingCtrl, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.showLoader();
        // Check if already authenticated
        this.authService.checkAuthentication().then(function (res) {
            console.log("Already authorized");
            _this.loading.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__new_arrivals_new_arrivals__["a" /* NewArrivalsPage */]);
        }, function (err) {
            console.log("Not already authorized");
            _this.loading.dismiss();
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.showLoader();
        var credentials = {
            email: this.email,
            password: this.password
        };
        this.authService.login(credentials).then(function (result) {
            _this.loading.dismiss();
            console.log(result);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }, function (err) {
            _this.loading.dismiss();
            console.log(err);
        });
        //  this.navCtrl.setRoot(BoutiqueInfoPage);
    };
    LoginPage.prototype.launchSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sign_up_sign_up__["a" /* SignUpPage */]);
    };
    LoginPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\login\login.html"*/'\n<ion-header>\n\n  <ion-navbar >\n    <ion-title class="toolbar">login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding-vertical >\n\n  <ion-list >\n      <ion-item >\n          <ion-label>Name:</ion-label>\n          <ion-input floating type="text" placeholder="Ghada Abdulaziz" #name > </ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label>Email:</ion-label>\n          <ion-input floating type="email" placeholder="******@*****.com" #email ></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label>Phone:</ion-label>\n          <ion-input floating type="phone" placeholder="+96655*******" #phone >Phone:</ion-input>\n      </ion-item>\n\n      <ion-item >\n          <ion-label>Password:</ion-label>\n          <ion-input floating type="password" placeholder="Password" #password></ion-input>\n      </ion-item >\n  </ion-list>\n  \n  <br />\n  <div>\n      <button ion-button full color="secondary" (click)="login()"> Login</button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsProvider = (function () {
    function ProductsProvider(http) {
        this.http = http;
    }
    ProductsProvider.prototype.getProducts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var productsArray = [JSON];
            _this.http.get('https://kessa.herokuapp.com/api/products')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    return ProductsProvider;
}());
ProductsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], ProductsProvider);

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CollectionPage = (function () {
    function CollectionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CollectionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CollectionPage');
    };
    return CollectionPage;
}());
CollectionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-collection',template:/*ion-inline-start:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\collection\collection.html"*/'\n<ion-header>\n  <ion-navbar >\n    <ion-title >Collection</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding-vertical >\n   <div  class="prod">         \n         <div >\n            <div class="card-background-page grid" >\n               <ion-row class="row unlimited-items">\n                  <ion-col class="col" >\n                     <ion-card>\n                       <!--item img-->\n                        <ion-card-content style="padding: 0px;" class="stock">\n                           <a (click)="getProductDetails()">\n                              <img src="../assets/img/logo.png">\n                           </a>\n                        </ion-card-content>\n                        <!--item name-->\n                        <ion-label color="deep"><strong>Item Name</strong></ion-label>\n                     </ion-card>\n                  </ion-col>\n\n                  <!-- second item -->\n                <ion-col class="col" >\n                  <ion-card>\n                    <!--item img-->\n                    <ion-card-content style="padding: 0px;" class="stock">\n                      <a (click)="getProductDetails()">\n                        <img src="../assets/img/logo.png">\n                      </a>\n                    </ion-card-content>\n                    <!--item name-->\n                    <ion-label color="deep"><strong>Item Name</strong></ion-label>\n                  </ion-card>\n                </ion-col>\n            \n               </ion-row>\n               <!--end of row-->\n            </div>\n         </div>\n         <!-- end of drid view -->   \n\n   </div>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\collection\collection.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], CollectionPage);

//# sourceMappingURL=collection.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DOrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DOrdersPage = (function () {
    function DOrdersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DOrdersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DOrdersPage');
    };
    return DOrdersPage;
}());
DOrdersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-d-orders',template:/*ion-inline-start:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\d-orders\d-orders.html"*/'\n<ion-header>\n  <ion-navbar >\n    <ion-title >Orders</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n   <div style="margin: 10px 0 0 0;">\n\n\n      <ion-list >\n         <!--list of orders-->\n         <ion-item no-lines class="items"  >\n           <ion-list-header>List of orders</ion-list-header>\n          <h4>Order #</h4>\n         <h4 style="margin-top:0px;"> Client Name: {{name}} </h4>\n         <h4 style="margin-top:0px;"> Client Phone: {{Phone}} </h4>\n         <h4 style="margin-top:0px;"> Client Size: {{Size}} </h4>\n         <!--list of items-->\n            <ion-list >\n              <ion-item>\n                <ion-list-header>List of Items</ion-list-header>\n                <h4 style="margin-top:0px;"> Item Name: {{Pname}} </h4>\n                <h4 style="margin-top:0px;"> Item color: {{Pname}} </h4>\n              </ion-item>\n            </ion-list>\n         </ion-item>\n         <h4 style="margin-top:10px;margin-bottom:0px; font-size:15px; padding-left:16px">Total </h4>\n\n         <hr >\n      </ion-list>\n   </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\d-orders\d-orders.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], DOrdersPage);

//# sourceMappingURL=d-orders.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //Customer Home Page
var NewItemPage = (function () {
    function NewItemPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewItemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewItemPage');
    };
    NewItemPage.prototype.addProduct = function () {
        console.log('added');
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    NewItemPage.prototype.uplodFile = function () {
    };
    return NewItemPage;
}());
NewItemPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-new-item',template:/*ion-inline-start:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\new-item\new-item.html"*/'\n<ion-header >\n  <ion-navbar >\n    <ion-title >New Kessa</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-vertical >\n  <div padding>\n    <form >\n        <ion-list>\n          <ion-item>\n              <ion-label>Name:</ion-label>\n              <ion-input floating type="text" placeholder="Product Name" #name > </ion-input>\n          </ion-item>\n\n          <ion-item >\n              <ion-label>category</ion-label>\n              <ion-select >\n              <ion-option color="secondary" >All black Kessa</ion-option>\n              <ion-option color="secondary" >Daily Kessa</ion-option>\n              <ion-option color="secondary" >Night Kessa</ion-option>\n              <ion-option color="secondary" >Scarfs</ion-option>\n              </ion-select>\n          </ion-item>\n\n          <ion-item>\n              <ion-label >Price</ion-label>\n              <ion-input floating type="number" ></ion-input>\n          </ion-item>\n\n          <ion-item class="option">\n              <ion-label>InStock</ion-label>\n              <ion-toggle checked="true" ></ion-toggle>\n          </ion-item>\n\n\n          <ion-item>\n              <ion-label >Description</ion-label>\n              <ion-textarea rows="4" floating type="text" ></ion-textarea>\n          </ion-item>\n\n          <ion-item>\n              <ion-thumbnail>\n                <img >\n              </ion-thumbnail>\n              <input type="file" name="Choose File" (click)="uplodFile()">\n          </ion-item>\n        </ion-list>\n    </form>\n  </div>\n\n  <div>\n    <button ion-button full color="primery" (click)="login()">save</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\new-item\new-item.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], NewItemPage);

//# sourceMappingURL=new-item.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_arrivals_new_arrivals__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categorizes_categorizes__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__categorizes_categorizes__["a" /* CategorizesPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__new_arrivals_new_arrivals__["a" /* NewArrivalsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Categorize" tabIcon="ios-apps-outline"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="NewArrivals" tabIcon="ios-star-outline"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Cart" tabIcon="cart"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Profile" tabIcon="ios-contact-outline"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__c_orders_c_orders__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { CardsPage } from '../cards/cards';
var ProfilePage = (function () {
    function ProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ProfilePage.prototype.Orders = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__c_orders_c_orders__["a" /* COrdersPage */]);
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\profile\profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title class="toolbar">\n      Profile\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list >\n      <ion-item >\n          <ion-label id="item">Name:</ion-label>\n          <ion-label #name >Ghada Abdulaziz</ion-label>\n      </ion-item>\n\n      <ion-item>\n          <ion-label id="item">Email:</ion-label>\n          <ion-label #email >******@*****.com</ion-label>\n      </ion-item>\n\n      <ion-item>\n          <ion-label id="item">Phone:</ion-label>\n          <ion-label #phone >+96655*******</ion-label>\n      </ion-item>\n\n      <ion-item >\n          <ion-label id="item">Password:</ion-label>\n          <ion-label #password>*******</ion-label>\n      </ion-item >\n\n      <ion-item > \n        <ion-label id="item">Country:</ion-label>\n        <ion-select [(ngModel)]="Country">\n          <ion-option value="SA">Saudi Arabia</ion-option>\n          <ion-option value="BH">Bahrain</ion-option>\n          <ion-option value="KW">Kuwait</ion-option>\n          <ion-option value="OM">Oman</ion-option>\n          <ion-option value="QA">Qatar</ion-option>\n          <ion-option value="AE">UAE</ion-option>\n        </ion-select>\n      </ion-item >\n\n  </ion-list>\n\n\n  <br />\n  <div>\n     <button ion-button full color="secondary" (click)="Orders()">Previous Orders</button> \n     <!--<button ion-button full color="secondary" (click)="Cards()"> Cards</button>-->\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\profile\profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the COrdersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var COrdersPage = (function () {
    function COrdersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    COrdersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad COrdersPage');
    };
    return COrdersPage;
}());
COrdersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-c-orders',template:/*ion-inline-start:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\c-orders\c-orders.html"*/'<!--\n  Generated template for the COrdersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title class="toolbar">Orders</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\c-orders\c-orders.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], COrdersPage);

//# sourceMappingURL=c-orders.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategorizesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategorizesPage = (function () {
    function CategorizesPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return CategorizesPage;
}());
CategorizesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-categorizes',template:/*ion-inline-start:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\categorizes\categorizes.html"*/'<ion-header>\n  <ion-navbar >\n    <ion-title class="toolbar">Catagorizes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  class="card-background-page" no-padding no-margin>\n  <ion-card>\n    <img src="../assets/img/logo.png"/>\n    <div class="card-title">All Black Kesssa</div>\n  </ion-card>\n\n  <ion-card>\n    <img src="../assets/img/logo.png"/>\n    <div class="card-title">Night Kesssa</div>\n  </ion-card>\n\n  <ion-card>\n    <img src="../assets/img/logo.png"/>\n    <div class="card-title">Daily Kesssa</div>\n  </ion-card>\n\n  <ion-card>\n    <img src="../assets/img/logo.png"/>\n    <div class="card-title">Scarfs</div>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\categorizes\categorizes.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], CategorizesPage);

//# sourceMappingURL=categorizes.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_payment__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartPage = (function () {
    function CartPage(navCtrl, navParams) {
        // this.payments = [];
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CartPage.prototype.placeOrder = function () {
        // if user choose cash on delivery >
        // this.navCtrl.push(TabsPage);
        // if user choose onlie payment 
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__payment_payment__["a" /* PaymentPage */]);
    };
    return CartPage;
}());
CartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cart',template:/*ion-inline-start:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\cart\cart.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title class="toolbar"> Cart</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-vertical>\n    <div >\n   \n      <ion-list style="margin-left:5px; margin-right:5px;">\n        <!-- one item -->\n          <ion-item >\n            <ion-thumbnail item-left>\n                <img src="./assets/img/abaya1.jpg">\n            </ion-thumbnail>\n\n            <h3 wrap-text style="font-size:15.5px;">Abaya Name</h3>\n            <h4 wrap-text >Price: <span>88</span></h4>\n            <button ion-button icon-only class="has-icon icon-only" no-margin item-right clear color="primery" (click)="deleteFromCart()">\n                <ion-icon ios="ios-remove-circle-outline" md="ios-remove-circle-outline"></ion-icon>\n            </button>\n          </ion-item>\n\n          <br>\n          <!--total-->\n          <ion-row class="label">\n            <ion-col width-75>\n                <ion-label no-margin><b>Totals</b></ion-label>\n            </ion-col>\n            <ion-col width-25 text-right>\n                <ion-label no-margin><b>99</b></ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-list>\n\n        <!--Payment Options-->\n        <div>\n          <ion-list style="margin:0px" text-wrap radio-group >\n          <ion-list-header >Payment</ion-list-header>\n          <ion-item>\n            <ion-label >Online Payment</ion-label>\n            <ion-radio color="secondary" value="stripe"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label >Cash On Delivery</ion-label>\n            <ion-radio color="secondary" checked="true" value="cod"></ion-radio>\n          </ion-item>\n          </ion-list>\n        </div>\n    </div>\n\n    <div>\n      <button ion-button full color="secondary" (click)="placeOrder()">Buy</button>\n    </div>\n</ion-content>\n\n\n\n        '/*ion-inline-end:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\cart\cart.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], CartPage);

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the PaymentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PaymentPage = (function () {
    function PaymentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentPage');
    };
    return PaymentPage;
}());
PaymentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-payment',template:/*ion-inline-start:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\payment\payment.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title class="toolbar"> Payment</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-vertical>\n  <div style="padding: 50px 25px 15px 25px; ">\n      <ion-list-header>Make Payment</ion-list-header>\n      <form #f="ngForm">\n        <ion-list no-margin>\n          <ion-item>\n              <ion-label >Name on Card</ion-label>\n              <ion-input required type="text"  name="stripe_number"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label >Card Number</ion-label>\n              <ion-input required type="text"  name="stripe_number"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label >Expiry Month</ion-label>\n              <ion-input required type="text"  name="stripe_exp_year"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label >Expiry Year</ion-label>\n              <ion-input required type="text"  name="stripe_exp_year"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label >Card Code</ion-label>\n              <ion-input required type="text"  name="stripe_code"></ion-input>\n            </ion-item>\n        </ion-list>\n      </form>\n      <br> \n  </div>\n  <button ion-button full color="secondary" (click)="RejesterBoutiqe()">Buy</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\payment\payment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], PaymentPage);

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the DProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DProfilePage = (function () {
    function DProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DProfilePage');
    };
    return DProfilePage;
}());
DProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-d-profile',template:/*ion-inline-start:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\d-profile\d-profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title class="toolbar">\n      Profile\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list >\n      <ion-item >\n          <ion-label id="item">Name:</ion-label>\n          <ion-label #name >Ghada Abdulaziz</ion-label>\n      </ion-item>\n\n      <ion-item>\n          <ion-label id="item">Email:</ion-label>\n          <ion-label #email >******@*****.com</ion-label>\n      </ion-item>\n\n      <ion-item>\n          <ion-label id="item">Phone:</ion-label>\n          <ion-label #phone >+96655*******</ion-label>\n      </ion-item>\n\n      <ion-item >\n          <ion-label id="item">Password:</ion-label>\n          <ion-label #password>*******</ion-label>\n      </ion-item >\n\n  </ion-list>\n\n\n  <br />\n  <div>\n     <button ion-button full color="secondary" (click)="Orders()">Previous Orders</button> \n     <!--<button ion-button full color="secondary" (click)="Cards()"> Cards</button>-->\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\d-profile\d-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], DProfilePage);

//# sourceMappingURL=d-profile.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartProvider = (function () {
    function CartProvider(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    CartProvider.prototype.addToCart = function (kessaDetails) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post('https://kessa.herokuapp.com/api/auth/register', JSON.stringify(kessaDetails), { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                _this.token = data.token;
                _this.storage.set('token', data.token);
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    ;
    return CartProvider;
}());
CartProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], CartProvider);

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_new_arrivals_new_arrivals__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_categorizes_categorizes__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cart_cart__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sign_up_sign_up__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_c_orders_c_orders__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_cards_cards__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_payment_payment__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_kessa_details_kessa_details__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_d_tabs_d_tabs__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_boutique_info_boutique_info__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_collection_collection__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_d_orders_d_orders__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_new_item_new_item__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_d_profile_d_profile__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_storage__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_cart_cart__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_auth_auth__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_products_products__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















;









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_new_arrivals_new_arrivals__["a" /* NewArrivalsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_categorizes_categorizes__["a" /* CategorizesPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_sign_up_sign_up__["a" /* SignUpPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_c_orders_c_orders__["a" /* COrdersPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_cards_cards__["a" /* CardsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_payment_payment__["a" /* PaymentPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_kessa_details_kessa_details__["a" /* KessaDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_d_profile_d_profile__["a" /* DProfilePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_d_tabs_d_tabs__["a" /* DTabsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_boutique_info_boutique_info__["a" /* BoutiqueInfoPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_collection_collection__["a" /* CollectionPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_d_orders_d_orders__["a" /* DOrdersPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_new_item_new_item__["a" /* NewItemPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_23__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_new_arrivals_new_arrivals__["a" /* NewArrivalsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_categorizes_categorizes__["a" /* CategorizesPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_sign_up_sign_up__["a" /* SignUpPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_c_orders_c_orders__["a" /* COrdersPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_cards_cards__["a" /* CardsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_payment_payment__["a" /* PaymentPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_kessa_details_kessa_details__["a" /* KessaDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_d_profile_d_profile__["a" /* DProfilePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_d_tabs_d_tabs__["a" /* DTabsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_boutique_info_boutique_info__["a" /* BoutiqueInfoPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_collection_collection__["a" /* CollectionPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_d_orders_d_orders__["a" /* DOrdersPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_new_item_new_item__["a" /* NewItemPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_26__providers_cart_cart__["a" /* CartProvider */],
            __WEBPACK_IMPORTED_MODULE_27__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_28__providers_products_products__["a" /* ProductsProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(101);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the CardsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CardsPage = (function () {
    function CardsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CardsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CardsPage');
    };
    return CardsPage;
}());
CardsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cards',template:/*ion-inline-start:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\cards\cards.html"*/'<!--\n  Generated template for the CardsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title class="toolbar">Cards</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n <ion-list >\n      <ion-item>\n          <ion-label >Card number:</ion-label>\n          <ion-input floating type="text" placeholder="" #CNum ></ion-input>\n      </ion-item>\n\n      <ion-item >\n          <ion-label >Name on the card:</ion-label>\n          <ion-input floating type="text" placeholder="Ghada Bin Farhan" #CName></ion-input>\n      </ion-item > \n\n      <ion-item >\n          <ion-label >Date:</ion-label>\n          <ion-input floating type="text" placeholder="mm" #month></ion-input>\n          <ion-input floating type="text" placeholder="yyyy" #year></ion-input>\n      </ion-item > \n  </ion-list>\n\n<br />\n  <div>\n      <button ion-button full color="secondary" (click)="Save()">Save</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\cards\cards.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], CardsPage);

//# sourceMappingURL=cards.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KessaDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cart_cart__ = __webpack_require__(212);
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
 * Generated class for the KessaDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var KessaDetailsPage = (function () {
    function KessaDetailsPage(navCtrl, loadingCtrl, cartService) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.cartService = cartService;
    }
    KessaDetailsPage.prototype.moveToCart = function () {
        var _this = this;
        this.showLoader();
        var kessaDetails = {
            size: this.size
        };
        this.cartService.addToCart(kessaDetails).then(function (result) {
            _this.loading.dismiss();
            console.log(result);
        }, function (err) {
            _this.loading.dismiss();
        });
    };
    KessaDetailsPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Adding to cart..'
        });
        this.loading.present();
    };
    return KessaDetailsPage;
}());
KessaDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-kessa-details',template:/*ion-inline-start:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\kessa-details\kessa-details.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>KessaDetails</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="product" >\n   <div padding style="margin-bottom:40px">\n      <img src="../assets/img/logo.png">\n      <!--name-->\n      <ion-label color="deep" text-center><strong>Product Name</strong></ion-label>\n      <!--price-->\n        <ion-list>\n          <ion-item>\n            <ion-label id="item">Price: </ion-label>\n            <ion-label>88</ion-label>\n          </ion-item >\n        </ion-list>\n\n        <!--info-->\n        <ion-list class="info">\n          <ion-item>\n            <ion-label id="item">Designer:</ion-label>\n            <ion-label>kesaa boutique</ion-label>\n          </ion-item >\n\n          <!--description-->\n          <ion-item>\n            <ion-label id="item">Description:</ion-label>\n            <ion-label text-wrap> Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ion-label>\n          </ion-item>\n          <!--Category-->\n          <ion-item>\n            <ion-label id="item">Category:</ion-label>\n            <ion-label >Night Kessa</ion-label>\n          </ion-item>\n           <!--Size-->   \n           <ion-item>\n              <ion-label>Size</ion-label>\n                <ion-select [(ngModel)]="size">\n                  <ion-option value="Small">S</ion-option>\n                  <ion-option value="Medium">M</ion-option>\n                  <ion-option value="Large">L</ion-option>\n               </ion-select>\n            </ion-item>\n\n\n       </ion-list>\n   </div>\n      <button ion-button full color="secondary" (click)="addToCart()">Add To Cart</button>\n</ion-content>\n\n\n'/*ion-inline-end:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\kessa-details\kessa-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_cart_cart__["a" /* CartProvider */]])
], KessaDetailsPage);

//# sourceMappingURL=kessa-details.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoutiqueInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__d_tabs_d_tabs__ = __webpack_require__(106);
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
 * Generated class for the BoutiqueInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BoutiqueInfoPage = (function () {
    function BoutiqueInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BoutiqueInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BoutiqueInfoPage');
    };
    BoutiqueInfoPage.prototype.RejesterBoutiqe = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__d_tabs_d_tabs__["a" /* DTabsPage */]);
    };
    return BoutiqueInfoPage;
}());
BoutiqueInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-boutique-info',template:/*ion-inline-start:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\boutique-info\boutique-info.html"*/'<ion-header>\n  <ion-navbar >\n    <ion-title >Boutique Info</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n\n  <ion-list id="info">\n      <ion-item >\n          <ion-label id="item" >Boutique name:</ion-label>\n          <ion-label #name >AbayaBoutique</ion-label>\n      </ion-item>\n\n      <ion-item>\n          <ion-label >Instagram account:</ion-label>\n          <ion-input floating type="text" placeholder="@*****" #instagram ></ion-input>\n      </ion-item>\n  </ion-list>\n\n  <ion-list > \n      <ion-list-header >The boutiqe ships to:</ion-list-header>\n      <ion-item >\n          <ion-label>Saudi Arabia</ion-label>\n          <ion-checkbox color="secondary" checked="true"></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n          <ion-label>Bahrain</ion-label>\n          <ion-checkbox color="secondary" checked="true" ></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n          <ion-label>Kuwait</ion-label>\n          <ion-checkbox color="secondary" checked="true" ></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n          <ion-label>Oman</ion-label>\n          <ion-checkbox color="secondary" checked="true" ></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n          <ion-label>Qatar</ion-label>\n          <ion-checkbox color="secondary" checked="true" ></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n          <ion-label>UAE</ion-label>\n          <ion-checkbox color="secondary" checked="true" ></ion-checkbox>\n      </ion-item>\n  </ion-list>\n\n  <ion-list >\n      <ion-list-header >online payment information</ion-list-header>\n      <ion-item>\n          <ion-label >Card number:</ion-label>\n          <ion-input floating type="text" placeholder="" #CNum ></ion-input>\n      </ion-item>\n\n      <ion-item >\n          <ion-label >Name on the card:</ion-label>\n          <ion-input floating type="text" placeholder="Ghada Bin Farhan" #CName></ion-input>\n      </ion-item > \n\n      <ion-item >\n          <ion-label >Bank</ion-label>\n          <ion-input floating type="text" placeholder="Bank Name" #CName></ion-input>\n      </ion-item >\n\n      <ion-item > \n        <ion-label >Country:</ion-label>\n        <ion-select [(ngModel)]="Country">\n          <ion-option value="SA">Saudi Arabia</ion-option>\n          <ion-option value="BH">Bahrain</ion-option>\n          <ion-option value="KW">Kuwait</ion-option>\n          <ion-option value="OM">Oman</ion-option>\n          <ion-option value="QA">Qatar</ion-option>\n          <ion-option value="AE">UAE</ion-option>\n        </ion-select>\n      </ion-item >\n\n  </ion-list>\n\n\n\n\n  <button ion-button full color="primery" (click)="RejesterBoutiqe()"> Rejester Boutiqe</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\boutique-info\boutique-info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], BoutiqueInfoPage);

//# sourceMappingURL=boutique-info.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewArrivalsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_products_products__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewArrivalsPage = (function () {
    function NewArrivalsPage(navCtrl, productService) {
        this.navCtrl = navCtrl;
        this.productService = productService;
    }
    NewArrivalsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.productService.getProducts().then(function (data) {
            _this.products = data;
        });
    };
    NewArrivalsPage.prototype.addToCart = function () {
    };
    return NewArrivalsPage;
}());
NewArrivalsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-new-arrivals',template:/*ion-inline-start:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\new-arrivals\new-arrivals.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title class="toolbar">\n      New Arrivals\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-vertical >\n   <div  class="prod">         \n         <div >\n            <div class="card-background-page grid" >\n\n               <ion-row *ngFor="let products of ProductsProvider.data" class="row unlimited-items">\n                  <ion-col class="col" >\n                     <ion-card>\n                       <!--item img-->\n                        <ion-card-content style="padding: 0px" class="stock">\n                           <a (click)="getProductDetails()">\n                              <img src="../assets/img/logo.png">\n                           </a>\n                        </ion-card-content>\n                        <!--item name-->\n                        <ion-label  style="font-weight:500; margin:8px 8px 0px;" color="deep"><strong>Item Name</strong></ion-label>\n          \n                        <ion-item no-padding class="price-list">\n                            <!--item price-->\n                            <h3 style="margin-top: 0px; text-align: left" color="secondary" >20</h3>\n                            <!--adding item-->\n                           <button ion-button icon-only style="margin: 0px" item-right clear color="primery"  (click)="addToCart()">\n                           <ion-icon ios="ios-add-circle-outline" md="ios-add-circle-outline"></ion-icon>\n                           </button>  \n                        </ion-item>\n                     </ion-card>\n                  </ion-col>\n\n                  <!-- second item -->\n                    <ion-col class="col" >\n                     <ion-card>\n                       <!--item img-->\n                        <ion-card-content style="padding: 0px" class="stock">\n                           <a (click)="getProductDetails()">\n                              <img src="../assets/img/logo.png">\n                           </a>\n                        </ion-card-content>\n                        <!--item name-->\n                        <ion-label style="font-weight:500; margin:8px 8px 0px;" color="deep"><strong>Item Name</strong></ion-label>\n          \n                        <ion-item no-padding class="price-list">\n                            <!--item price-->\n                            <h3 style="margin-top: 0px; text-align: left" color="secondary" >20</h3>\n                            <!--adding item-->\n                           <button ion-button icon-only style="margin: 0px" item-right clear color="primery"  (click)="addToCart()">\n                           <ion-icon ios="ios-add-circle-outline" md="ios-add-circle-outline"></ion-icon>\n                           </button>  \n                        </ion-item>\n                     </ion-card>\n                  </ion-col>\n            \n               </ion-row>\n               <!--end of row-->\n            </div>\n         </div>\n         <!-- end of drid view -->   \n\n   </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\asus2\Documents\Spring16-17\GP I\GPApp-master\client\src\pages\new-arrivals\new-arrivals.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_products_products__["a" /* ProductsProvider */]])
], NewArrivalsPage);

//# sourceMappingURL=new-arrivals.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map