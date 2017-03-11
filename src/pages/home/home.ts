import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
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

	constructor(private navCtrl: NavController, private auth: AuthService) {
		// let info = this.auth.getUserInfo();
		// console.log(info);
		// this.name = info.name;
		// this.username = info.username;
		this.selected = 'unclaimed';

		for(let i =0; i < 10; i++) {
			this.donees.push(i);
		}

  	}

}
