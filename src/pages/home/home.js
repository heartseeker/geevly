var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
var HomePage = (function () {
    function HomePage(navCtrl, auth) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.name = '';
        this.username = '';
        this.selected = '';
        this.donees = [];
        // let info = this.auth.getUserInfo();
        // console.log(info);
        // this.name = info.name;
        // this.username = info.username;
        this.selected = 'unclaimed';
        for (var i = 0; i < 10; i++) {
            this.donees.push(i);
        }
    }
    return HomePage;
}());
HomePage = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [NavController, AuthService])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map