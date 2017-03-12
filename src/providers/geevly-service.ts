import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GeevlyService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GeevlyService {

  	constructor(public http: Http) {
    	console.log('Hello GeevlyService Provider');
	}

	getDonees() {
      // let headers = new Headers();
      // headers.append('GEEVLY-API-KEY','8a04542c78cd8ded94df700b2f73e49f33bc613f');
      // headers.append('Content-type','application/x-www-form-urlencoded');
      // return this.http.get('https://api.geevly.org/api_donee/donees', { headers: headers }).map((res) => res.json());


       /******* NEW ********/
      let params = JSON.stringify({"username": "store2", "password": "kernel32"});
      // let headers = new Headers({ 'Content-Type': 'application/json' });
      let headers = new Headers({ 'GEEVLY-API-KEY': '8a04542c78cd8ded94df700b2f73e49f33bc613f', 'Content-Type': 'application/json' });
      // let headers = new Headers({ 'Content-Type': 'multipart/form-data' });
      let options = new RequestOptions({  headers: headers });
      return this.http.get('https://api.geevly.org/api_donee/donees', options).map((res) => {res.json()});
    }

}
