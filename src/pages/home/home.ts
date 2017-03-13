import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { GeevlyService } from '../../providers/geevly-service';
import { LoginPage } from '../login/login';
import { DoneeDetailPage } from '../donee-detail/donee-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	name = '';
	username = '';
	selected = '';
	donees = [];
	filteredItems:any;
	loading: Loading;
	pageNum: any;

	constructor(private navCtrl: NavController, private _auth: AuthService, private _geevly : GeevlyService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
		// let info = this._auth.getUserInfo();
		// console.log(info);
		// this.name = info.name;
		// this.username = info.username;
		this.selected = 'unclaimed';
		this.fetchData();
		this.pageNum = 1;
  	}


  	fetchData() {
  		this.showLoading()
		this._geevly.getDonees(this.pageNum).subscribe(data => {
			this.donees = data.result;
			this.donees.forEach((value, key) => {
	  			this.donees[key].BirthDate = this.getAge(value.BirthDate);
	  		});
	  		this.loading.dismiss();
		}, (error) => {
			console.log(JSON.stringify(error));
		});
  	}

  	searchData(name) {
		this._geevly.searchDonees(name).subscribe(data => {
			this.donees = data.result;
			this.donees.forEach((value, key) => {
	  			this.donees[key].BirthDate = this.getAge(value.BirthDate);
	  		});
		}, (error) => {
			console.log(JSON.stringify(error));
		});
  	}


  	getItems(ev) {
	    // set val to the value of the ev target
	    var val = ev.target.value;
	    console.log(val);
	    this.searchData(val);

	    // if the value is an empty string don't filter the items
	    if (val && val.trim() != '') {
	      this.donees = this.donees.filter((item) => {
	        return (item.LastName.toLowerCase().indexOf(val.toLowerCase()) > -1) || (item.FirstName.toLowerCase().indexOf(val.toLowerCase()) > -1);
	      })
	    }
	}

	doInfinite(infiniteScroll) {

		console.log('Begin async operation');
		this.pageNum += 1;
		this._geevly.getDonees(this.pageNum).subscribe(res => {
			res.result.forEach((value, key) => {
	  			res.result[key].BirthDate = this.getAge(value.BirthDate);
	  		});
			this.donees.push(...res.result);
		});

		console.log('Async operation has ended');
		infiniteScroll.complete();
	}

	goTo(donee) {
		this.navCtrl.push(DoneeDetailPage, {donee:donee});
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


  	showLoading() {
		this.loading = this.loadingCtrl.create({
      		content: 'Please wait...'
	    });
	    this.loading.present();
	}

}
