webpackJsonp([2],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nextPage = __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */];
    }
    LoginPage.prototype.googleConnect = function () {
        var _this = this;
        var provider = new __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"].GoogleAuthProvider();
        __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().signInWithPopup(provider)
            .then(function (result) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
        })
            .catch(function (error) {
            console.log(error.message);
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/konstantinova/ionic/myapp/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content class="bg-images">\n	<div class="chrome">\n	<img src="..//assets/imgs/Chrome.png" alt="chrome" class="chrome">\n	</div>\n\n\n\n\n<div id="parentList">\n    <ion-list inset class="list">\n\n      <ion-item>\n        <ion-label floating style="font-family:OpenSans; font-size:14px; color:red">Username</ion-label>\n        <ion-input type="text" value=""></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating style="font-family:OpenSans; font-size:14px; color:red">Password</ion-label>\n        <ion-input type="password" value=""></ion-input>\n      </ion-item>\n      <div class="padding">\n      <button ion-button block [navPush]="nextPage" style="font-family:OpenSans;" round outline>Sign In\n      </button>\n    </div>\n\n\n    <div class="padding">\n      <button ion-button block [navPush]="nextPage" color=red block style="font-family:OpenSans; color:red" round outline>Sign up</button>\n      <button ion-button block (click)="googleConnect()" color=red block style="font-family:OpenSans; color:red" round outline>Google</button>\n    </div>\n\n<div class="media">\n	<i class="fa fa-instagram fa-2x" aria-hidden="true"></i>\n<i class="fa fa-pinterest fa-2x" aria-hidden="true"></i>\n<i class="fa fa-facebook-official fa-2x" aria-hidden="true"></i>\n</div>\n   \n\n\n    </ion-list>\n\n</div>\n  	\n  </ion-content>\n\n\n\n\n\n'/*ion-inline-end:"/Users/konstantinova/ionic/myapp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(140);
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
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nextPage = __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */];
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/konstantinova/ionic/myapp/src/pages/welcome/welcome.html"*/'<ion-slides pager>\n\n  <ion-slide class="video" style="background-color:#6ebfaf">\n    <i class="fa fa-video-camera" style="font-size:130px; color: white" aria-hidden="true"></i>\n    <h1 style="color:white">Video</h1>\n    <p style="color:white; font-family: OpenSans">Telecharger vos video</p>\n\n<div style="position:absolute; bottom:120px; text-align: center; z-index:1000; width: 100%; bottom:50px;">\n\n\n\n  <button ion-button [navPush]="nextPage" color="light" round outline>Download</button>\n</div>\n  </ion-slide>\n\n <ion-slide class="photo" style="background-color:#b387e1">\n   <i class="fa fa-camera-retro" style="font-size:130px; color: white" aria-hidden="true"></i>\n    <h1 style="color:white">Photo</h1>\n    <p style="color:white; font-family: OpenSans">Telecharger vos photos</p>\n\n<div style="position:absolute; bottom:120px; text-align: center; z-index:1000; width: 100%; bottom:50px;">\n  <button ion-button [navPush]="nextPage" color="light" round outline>Download</button>\n</div>\n  </ion-slide>\n\n  <ion-slide class="son" style="background-color:#f79e5c">\n    <i class="fa fa-headphones" style="font-size:130px; color: white" aria-hidden="true"></i>\n    <h1 style="color:white">Son</h1>\n    <p style="color:white; font-family: OpenSans">Telecharger vos sons</p>\n\n<div style="position:absolute; bottom:120px; text-align: center; z-index:1000; width: 100%; bottom:50px;">\n  <button ion-button [navPush]="nextPage" color="light" round outline>Download</button>\n</div>\n  </ion-slide>\n  \n</ion-slides>'/*ion-inline-end:"/Users/konstantinova/ionic/myapp/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		443,
		1
	],
	"../pages/welcome/welcome.module": [
		444,
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
webpackAsyncContext.id = 192;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__music_music__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_news__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__video_video__ = __webpack_require__(201);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__video_video__["a" /* VideoPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__music_music__["a" /* MusicPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__news_news__["a" /* NewsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/konstantinova/ionic/myapp/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Video" tabIcon="videocam"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Photo" tabIcon="md-camera"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Son" tabIcon="md-headset"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/konstantinova/ionic/myapp/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__musics_travel__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__musics_family__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__musics_party__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MusicPage = (function () {
    function MusicPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MusicPage.prototype.getTravelMusic = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__musics_travel__["a" /* TravelPageMusic */]);
    };
    MusicPage.prototype.getFamilyMusic = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__musics_family__["a" /* FamilyPageMusic */]);
    };
    MusicPage.prototype.getPartyMusic = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__musics_party__["a" /* PartyPageMusic */]);
    };
    MusicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/konstantinova/ionic/myapp/src/pages/music/music.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      \n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n\n  <ion-card>\n    <img src="../assets/imgs/play1.jpg" (click)="getTravelMusic()" alt="">\n    <div class="card-title" (click)="getPartyMusic()">Travel</div>\n    <div class="card-subtitle" (click)="getPartyMusic()">41 Listings</div>\n  </ion-card>\n\n  <ion-card>\n    <img src="../assets/imgs/play2.jpg" (click)="getFamilyMusic()" alt="">\n    <div class="card-title" (click)="getPartyMusic()">Family</div>\n    <div class="card-subtitle" (click)="getPartyMusic()">64 Listings</div>\n  </ion-card>\n\n  <ion-card>\n    <img src="../assets/imgs/play3.jpg" (click)="getPartyMusic()" alt="">\n    <div class="card-title" (click)="getPartyMusic()">Party</div>\n    <div class="card-subtitle" (click)="getPartyMusic()">72 Listings</div>\n  </ion-card>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"/Users/konstantinova/ionic/myapp/src/pages/music/music.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MusicPage);
    return MusicPage;
}());

//# sourceMappingURL=music.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelPageMusic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TravelPageMusic = (function () {
    function TravelPageMusic(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TravelPageMusic = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-travel',
            template: "\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      \n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n<img src = \"../assets/imgs/photo2.jpg\" style=\"display:block; width: 100%\" alt=\"\">\n  <img src = \"../assets/imgs/photo3.jpg\" style=\"display:block; width: 100%\" alt=\"\">\n  <img src = \"../assets/imgs/photoimg.JPG\" style=\"display:block; width: 100%\" alt=\"\">\n  <img src = \"../assets/imgs/photoimg2.JPG\" style=\"display:block; width: 100%\" alt=\"\">\n  <img src = \"../assets/imgs/photoimg4.JPG\" style=\"display:block; width: 100%\" alt=\"\">\n  <img src = \"../assets/imgs/photo.jpg\" style=\"display:block; width: 100%\" alt=\"\">\n\n\n\n</ion-content>\n\n\n\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], TravelPageMusic);
    return TravelPageMusic;
}());

//# sourceMappingURL=travel.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FamilyPageMusic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FamilyPageMusic = (function () {
    function FamilyPageMusic(navCtrl, camera) {
        this.navCtrl = navCtrl;
        this.camera = camera;
    }
    FamilyPageMusic.prototype.prendrePhoto = function () {
        var _this = this;
        var CameraOptions = {
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.ALLMEDIA
        };
        this.camera.getPicture(CameraOptions).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    FamilyPageMusic = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-family',
            template: "\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      \n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n<img src = \"../assets/imgs/photo2.jpg\" style=\"display:block; width: 100%\" alt=\"\">\n  <img src = \"../assets/imgs/photo3.jpg\" style=\"display:block; width: 100%\" alt=\"\">\n  <img src = \"../assets/imgs/photoimg.JPG\" style=\"display:block; width: 100%\" alt=\"\">\n  <img src = \"../assets/imgs/photoimg2.JPG\" style=\"display:block; width: 100%\" alt=\"\">\n  <img src = \"../assets/imgs/photoimg4.JPG\" style=\"display:block; width: 100%\" alt=\"\">\n  <img src = \"../assets/imgs/photo.jpg\" style=\"display:block; width: 100%\" alt=\"\">\n  \n  <img [src]=\"base64Image\">\n  <button (click)=\"prendrePhoto()\"><ion-icon style=\"display:block; text-align:center; height:20px\" ios=\"ios-camera-outline\" md=\"md-camera\"></ion-icon></button>\n</ion-content>\n\n\n\n\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
    ], FamilyPageMusic);
    return FamilyPageMusic;
}());

//# sourceMappingURL=family.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartyPageMusic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PartyPageMusic = (function () {
    function PartyPageMusic(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PartyPageMusic = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-party',
            template: "\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      \n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n<img src = \"../assets/imgs/photo2.jpg\" style=\"display:block; width: 100%\" alt=\"\">\n  <img src = \"../assets/imgs/photo3.jpg\" style=\"display:block; width: 100%\" alt=\"\">\n  <img src = \"../assets/imgs/photoimg.JPG\" style=\"display:block; width: 100%\" alt=\"\">\n  <img src = \"../assets/imgs/photoimg2.JPG\" style=\"display:block; width: 100%\" alt=\"\">\n  <img src = \"../assets/imgs/photoimg4.JPG\" style=\"display:block; width: 100%\" alt=\"\">\n  <img src = \"../assets/imgs/photo.jpg\" style=\"display:block; width: 100%\" alt=\"\">\n\n\n\n</ion-content>\n   \n\n\n\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], PartyPageMusic);
    return PartyPageMusic;
}());

//# sourceMappingURL=party.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsPage = (function () {
    function NewsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/konstantinova/ionic/myapp/src/pages/news/news.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      \n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n\n \n  <ion-list no-border>\n\n    <ion-list-header>\n      Son\n    </ion-list-header>\n\n    \n\n    <ion-item>\n      <ion-toggle checked="false"></ion-toggle>\n      <ion-label>\n        First cry of Adèle\n      </ion-label>\n      <ion-icon name=\'ios-headset\' item-start></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-toggle checked="false"></ion-toggle>\n      <ion-label>\n        Samuel snoring \n      </ion-label>\n      <ion-icon name=\'ios-headset\' item-start></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-toggle checked="false"></ion-toggle>\n      <ion-label>\n        Vadim song\n      </ion-label>\n      <ion-icon name=\'ios-headset\' item-start></ion-icon>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-toggle checked="false"></ion-toggle>\n      <ion-label>\n        My cry :)\n      </ion-label>\n      <ion-icon name=\'ios-headset\' item-start></ion-icon>\n    </ion-item>\n\n    \n  </ion-list>\n\n\n\n\n\n  <div class="bas">\n  <button><ion-icon name=\'download\' item-start></ion-icon></button>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/konstantinova/ionic/myapp/src/pages/news/news.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__videos_travel__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__videos_family__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__videos_party__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VideoPage = (function () {
    function VideoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    VideoPage.prototype.getTravelVideo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__videos_travel__["a" /* TravelPage */]);
    };
    VideoPage.prototype.getFamilyVideo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__videos_family__["a" /* FamilyPage */]);
    };
    VideoPage.prototype.getPartyVideo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__videos_party__["a" /* PartyPage */]);
    };
    VideoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/konstantinova/ionic/myapp/src/pages/video/video.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      \n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="card-background-page">\n\n  <ion-card>\n    <img src="../assets/imgs/play1.jpg" (click)="getTravelVideo()"/>\n    <div class="card-title" (click)="getTravelVideo()">Travel</div>\n    <div class="card-subtitle" (click)="getTravelVideo()">41 Listings</div>\n  </ion-card>\n\n  <ion-card>\n    <img src="../assets/imgs/play2.jpg" (click)="getFamilyVideo()" />\n    <div class="card-title" (click)="getFamilyVideoo()">Family</div>\n    <div class="card-subtitle" (click)="getFamilyVideo()">64 Listings</div>\n  </ion-card>\n\n  <ion-card>\n    <img src="../assets/imgs/play3.jpg" (click)="getPartyVideo()" />\n    <div class="card-title" (click)="getPartyVideo()">Party</div>\n    <div class="card-subtitle" (click)="getPartyVideo()">72 Listings</div>\n  </ion-card>\n\n  \n\n'/*ion-inline-end:"/Users/konstantinova/ionic/myapp/src/pages/video/video.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], VideoPage);
    return VideoPage;
}());

//# sourceMappingURL=video.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TravelPage = (function () {
    function TravelPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TravelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-travel',
            template: "\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      \n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n<iframe style=\"display:block\" width=\"100%\" height=\"50%\" src=\"https://www.youtube.com/embed/_-S7k7wf4Ws\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n\n<iframe style=\"display:block\" width=\"100%\" height=\"50%\" src=\"https://www.youtube.com/embed/KmwZbu5269w\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n<iframe style=\"display:block\" width=\"100%\" height=\"50%\" src=\"https://www.youtube.com/embed/RsZSQdIFA44\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n<iframe style=\"display:block\" width=\"100%\" height=\"50%\" src=\"https://www.youtube.com/embed/W1XFNI66LHA\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n\n\n\n</ion-content>\n\n\n\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], TravelPage);
    return TravelPage;
}());

//# sourceMappingURL=travel.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FamilyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FamilyPage = (function () {
    function FamilyPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FamilyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-family',
            template: "\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      \n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n<iframe style=\"display:block\" width=\"100%\" height=\"50%\" src=\"https://www.youtube.com/embed/_-S7k7wf4Ws\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n\n<iframe style=\"display:block\" width=\"100%\" height=\"50%\" src=\"https://www.youtube.com/embed/KmwZbu5269w\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n<iframe style=\"display:block\" width=\"100%\" height=\"50%\" src=\"https://www.youtube.com/embed/RsZSQdIFA44\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n<iframe style=\"display:block\" width=\"100%\" height=\"50%\" src=\"https://www.youtube.com/embed/W1XFNI66LHA\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n\n\n\n</ion-content>\n\n\n\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], FamilyPage);
    return FamilyPage;
}());

//# sourceMappingURL=family.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PartyPage = (function () {
    function PartyPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PartyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-party',
            template: "\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      \n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n<iframe style=\"display:block\" width=\"100%\" height=\"50%\" src=\"https://www.youtube.com/embed/_-S7k7wf4Ws\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n\n<iframe style=\"display:block\" width=\"100%\" height=\"50%\" src=\"https://www.youtube.com/embed/KmwZbu5269w\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n<iframe style=\"display:block\" width=\"100%\" height=\"50%\" src=\"https://www.youtube.com/embed/RsZSQdIFA44\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n<iframe style=\"display:block\" width=\"100%\" height=\"50%\" src=\"https://www.youtube.com/embed/W1XFNI66LHA\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n\n\n\n</ion-content>\n\n\n\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], PartyPage);
    return PartyPage;
}());

//# sourceMappingURL=party.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(310);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_music_music__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_news_news__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_video_video__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_videos_travel__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_videos_family__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_videos_party__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_musics_travel__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_musics_family__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_musics_party__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_firebase__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var config = {
    apiKey: "AIzaSyCK2YzYTJ48-xok3AZbf_A-CdjESSvOGv8",
    authDomain: "photoapp-best.firebaseapp.com",
    databaseURL: "https://photoapp-best.firebaseio.com",
    projectId: "photoapp-best",
    storageBucket: "",
    messagingSenderId: "574550958076"
};
__WEBPACK_IMPORTED_MODULE_19_firebase__["initializeApp"](config);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_music_music__["a" /* MusicPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_video_video__["a" /* VideoPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_videos_travel__["a" /* TravelPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_videos_family__["a" /* FamilyPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_videos_party__["a" /* PartyPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_musics_travel__["a" /* TravelPageMusic */],
                __WEBPACK_IMPORTED_MODULE_15__pages_musics_family__["a" /* FamilyPageMusic */],
                __WEBPACK_IMPORTED_MODULE_16__pages_musics_party__["a" /* PartyPageMusic */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_music_music__["a" /* MusicPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_video_video__["a" /* VideoPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_videos_travel__["a" /* TravelPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_videos_family__["a" /* FamilyPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_videos_party__["a" /* PartyPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_musics_travel__["a" /* TravelPageMusic */],
                __WEBPACK_IMPORTED_MODULE_15__pages_musics_family__["a" /* FamilyPageMusic */],
                __WEBPACK_IMPORTED_MODULE_16__pages_musics_party__["a" /* PartyPageMusic */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                //FirebaseProvider,
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(141);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/konstantinova/ionic/myapp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/konstantinova/ionic/myapp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[286]);
//# sourceMappingURL=main.js.map