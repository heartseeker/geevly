import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


export class User {
  name: string;
  username: string;
 
  constructor(name: string, username: string) {
    this.name = name;
    this.username = username;
  }
}


@Injectable()
export class AuthService {

	currentUser: User;


	constructor(public http: Http) {
    	console.log('Hello AuthService Provider');
	}

	public login(credentials) {
		if (credentials.username === null || credentials.password === null) {
      		return Observable.throw("Please insert credentials");
    	} else {
	      	return Observable.create(observer => {
	        	// At this point make a request to your backend to make a real check!
	        	let access = (credentials.password === "pass" && credentials.username === "user");
	        	this.currentUser = new User('Simon', 'saimon@devdactic.com');
	        	observer.next(access);
	        	observer.complete();
	      	});
    	}
    }

    public getUserInfo() : User {
    	return this.currentUser;
  	}
	 
	 
  	public logout() {
    	return Observable.create(observer => {
      		this.currentUser = null;
      		observer.next(true);
      		observer.complete();
	    });
  	}

}
