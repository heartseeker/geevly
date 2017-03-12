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

  key = '8a04542c78cd8ded94df700b2f73e49f33bc613f';

  constructor(public http: Http) {
  	console.log('Hello GeevlyService Provider');
  }

	getDonees() {
      return this.http.get('https://api.geevly.org/api_donee/donees?GEEVLY-API-KEY=' + this.key).map(res => res.json());
    }

}
