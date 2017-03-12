import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { GeevlyService } from '../../providers/geevly-service';
import { LoginPage } from '../login/login';

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

	constructor(private navCtrl: NavController, private _auth: AuthService, private _geevly : GeevlyService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
		// let info = this._auth.getUserInfo();
		// console.log(info);
		// this.name = info.name;
		// this.username = info.username;
		this.selected = 'unclaimed';
		this.fetchData();
  	}

  	fetchData() {
  		this.showLoading()
		this._geevly.getDonees().subscribe(data => {
			this.donees = data.result;
			this.loading.dismiss();
			console.log(data);
		}, (error) => {
			console.log(JSON.stringify(error));
		});
  	}

  	reset() {
  		this.filteredItems = this.donees;
  	}

  	getItems(ev) {
	    // Reset items back to all of the items
	    this.reset();

	    // set val to the value of the ev target
	    var val = ev.target.value;

	    // if the value is an empty string don't filter the items
	    if (val && val.trim() != '') {
	      this.filteredItems = this.filteredItems.filter((item) => {
	        return (item.LastName.toLowerCase().indexOf(val.toLowerCase()) > -1);
	      })
	    }
	  }

  	assignCopy(){
	   this.filteredItems = Object.assign([], this.donees);
	}

  	filterItem(value){
  		console.log(value);
	   if(!value) this.assignCopy(); //when nothing has typed
	   this.filteredItems = Object.assign([], this.donees).filter(
	      // item => item.LastName.toLowerCase().indexOf(value.toLowerCase()) > -1
	      item => console.log(item.LastName)
	   )
	}

  	showLoading() {
		this.loading = this.loadingCtrl.create({
      		content: 'Please wait...'
	    });
	    this.loading.present();
	}

}
