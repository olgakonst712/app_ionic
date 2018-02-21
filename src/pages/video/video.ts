import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TravelPage } from '../videos/travel';
import { FamilyPage } from '../videos/family';
import { PartyPage } from '../videos/party';

@Component({
  selector: 'page-home',
  templateUrl: 'video.html'
})
export class VideoPage {

  constructor(public navCtrl: NavController) {

  }
getTravelVideo(){
	this.navCtrl.push(TravelPage);

}
getFamilyVideo(){
	this.navCtrl.push(FamilyPage);

}getPartyVideo(){
	this.navCtrl.push(PartyPage);

}
}
