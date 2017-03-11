import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { HomePage } from '../home/home';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

	loading: Loading;
  	user = {username: '', password: ''};


  	constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad LoginPage');
  	}

  	login() {
	    this.showLoading()

	    this.auth.login(this.user).subscribe(allowed => {
	    	console.log(allowed);
      		if (allowed) {
        		this.loading.dismiss();
        		this.navCtrl.setRoot(HomePage)
      		} else {
	        	this.showError("Access Denied");
	      }
	    },
	    error => {
	    	console.log('Error!');
      		this.showError(error);
	    });
	}
	 
	showLoading() {
		this.loading = this.loadingCtrl.create({
      		content: 'Please wait...'
	    });
	    this.loading.present();
	}
	 
  	showError(text) {
  		this.loading.dismiss();
	   
	    let alert = this.alertCtrl.create({
	      title: 'Fail',
	      subTitle: text,
	      buttons: ['OK']
	    });
	    alert.present(prompt);
  	}

  	log() {
  		this.auth.postIt().subscribe(allowed => {
  			this.loading.dismiss();
	    	console.log(allowed);
	    },
	    error => {
	    	console.log('Error!!!');
      		this.showError(error);
	    });
  	}



}
