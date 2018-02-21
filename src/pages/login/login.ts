import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import * as firebase from 'firebase';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	nextPage = TabsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  googleConnect() {
  	const provider = new firebase.auth.GoogleAuthProvider();
  	firebase.auth().signInWithPopup(provider)
  	.then((result) => {
  			this.navCtrl.push(TabsPage);
  		}
  	)
  	.catch((error) => {
  		console.log(error.message);
  	})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
