import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http, Headers, RequestOptions } from '@angular/http';
// import { Http, Headers } from '@angular/http';
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

	login(credentials) {
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

    getUserInfo() : User {
    	return this.currentUser;
  	}
	 
	 
  	logout() {
    	return Observable.create(observer => {
      		this.currentUser = null;
      		observer.next(true);
      		observer.complete();
	    });
  	}

    postIt2() {
      let params = JSON.stringify({var1: 'test', var2: 325});
      let headers = new Headers();
      headers.append('Content-type','application/x-www-form-urlencoded');
      /******* NEW ********/
      // let headers = new Headers({ 'Content-Type': 'application/json' });
      // let options = new RequestOptions({ headers: headers });

      return this.http.post('http://alexinformationtech.com/post.php', params, { headers: headers }).map((res) => res.json());
      // return this.http.post('http://alexinformationtech.com/post.php', params, options).map((res) => {res.json()});
      
    }

    postIt() {
      let params = JSON.stringify({username: 'store2', password: 'kernel32'});
      let headers = new Headers();
      // headers.append('Content-type','application/x-www-form-urlencoded');
      headers.append('Content-type','multipart/form-data');

      return this.http.post('https://api.geevly.org/api_users/login', params, { headers: headers }).map((res) => res.json());
    }

    donee() {
      let headers = new Headers();
      headers.append('GEEVLY-API-KEY','8a04542c78cd8ded94df700b2f73e49f33bc613f');
      /******* NEW ********/
      // let headers = new Headers({ 'Content-Type': 'application/json' });
      // let options = new RequestOptions({ headers: headers });

      return this.http.get('https://api.geevly.org/api_donee/donees', { headers: headers }).map((res) => res.json());
      // return this.http.post('http://alexinformationtech.com/post.php', params, options).map((res) => {res.json()});
      
    }

    testlog() {
     let params = JSON.stringify({username: 'store2', password: 'kernel32'});
        let headers = new Headers();
      headers.append('GEEVLY-API-KEY','8a04542c78cd8ded94df700b2f73e49f33bc613f');
      // headers.append('Content-type','multipart/form-data');
      headers.append('Content-type','application/x-www-form-urlencoded');
      // headers.append('Content-Type', 'application/json');


  //       let headers = new Headers({
    //   'Content-Type': 'application/x-www-form-urlencoded',
    //   'GEEVLY-API-KEY':'8a04542c78cd8ded94df700b2f73e49f33bc613f'
    // });
    // let options = new RequestOptions({
    //   headers: headers
    // });
    // // TODO: Encode the values using encodeURIComponent().
    // let body = 'username=store2&password=kernel32';


      return this.http.post('https://api.geevly.org/api_users/login', params, { headers: headers }).map((res) => res.json());
      // return this.http.post('https://api.geevly.org/api_users/login', body, options).map((res) => res.json());
    }


}
