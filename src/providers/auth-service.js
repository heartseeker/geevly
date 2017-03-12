var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
var User = (function () {
    function User(name, username) {
        this.name = name;
        this.username = username;
    }
    return User;
}());
export { User };
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        console.log('Hello AuthService Provider');
    }
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        if (credentials.username === null || credentials.password === null) {
            return Observable.throw("Please insert credentials");
        }
        else {
            return Observable.create(function (observer) {
                // At this point make a request to your backend to make a real check!
                var access = (credentials.password === "pass" && credentials.username === "user");
                _this.currentUser = new User('Simon', 'saimon@devdactic.com');
                observer.next(access);
                observer.complete();
            });
        }
    };
    AuthService.prototype.getUserInfo = function () {
        return this.currentUser;
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return Observable.create(function (observer) {
            _this.currentUser = null;
            observer.next(true);
            observer.complete();
        });
    };
    AuthService.prototype.testlog = function () {
        var params = JSON.stringify({ username: 'store2', password: 'kernel32' });
        var headers = new Headers();
        headers.append('GEEVLY-API-KEY', '8a04542c78cd8ded94df700b2f73e49f33bc613f');
        // headers.append('Content-type','multipart/form-data');
        // headers.append('Content-type','application/x-www-form-urlencoded');
        // headers.append('Content-Type', 'application/json');
        return this.http.post('https://api.geevly.org/api_users/login', params, { headers: headers }).map(function (res) { return res.json(); });
    };
    return AuthService;
}());
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth-service.js.map