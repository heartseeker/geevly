import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the DoneeDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-donee-detail',
  templateUrl: 'donee-detail.html'
})
export class DoneeDetailPage {

	donee: any;
	age: any;
	title: any;
	city: any;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.city = {1:'Legazpi', 2:'Makati'};
		this.donee = navParams.get('donee');
		let age = this.getAge(this.donee.BirthDate);
		this.title = age + ' years old' + ' | ' + this.city[this.donee.city_id];
	}


	ionViewDidLoad() {
		console.log('ionViewDidLoad DoneeDetailPage');
	}

	getAge(dateString) {
	    let today = new Date();
	    let birthDate = new Date(dateString);
	    let age = today.getFullYear() - birthDate.getFullYear();
	    let m = today.getMonth() - birthDate.getMonth();
	    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
	        age--;
	    }
	    return age;
	}

}
