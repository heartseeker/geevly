import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

	constructor(private navCtrl: NavController, private _auth: AuthService, private _geevly : GeevlyService) {
		// let info = this._auth.getUserInfo();
		// console.log(info);
		// this.name = info.name;
		// this.username = info.username;
		this.selected = 'unclaimed';

		for(let i =0; i < 10; i++) {
			this.donees.push(i);
		}

		this._geevly.getDonees().subscribe((data) => {
			console.log(data);
			alert(JSON.stringify(data));
		}, (error) => {
			console.log(JSON.stringify(error));
		});


  	}

}
