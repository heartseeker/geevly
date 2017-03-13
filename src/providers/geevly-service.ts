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

	getDonees(pageNum) {
      return this.http.get('https://api.geevly.org/api_donee/donees?sort_field=FirstName&sort_order=FirstName&page='+pageNum+'&per_page=5&GEEVLY-API-KEY=' + this.key).map(res => res.json());
    }

	searchDonees(name) {
      return this.http.get(`https://api.geevly.org/api_donee/donees?sort_field=FirstName&name=${name}&GEEVLY-API-KEY=${this.key}`).map(res => res.json());
    }

}
