import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TravelPageMusic } from '../musics/travel';
import { FamilyPageMusic } from '../musics/family';
import { PartyPageMusic } from '../musics/party';



@Component({
  selector: 'page-home',
  templateUrl: 'music.html'
})
export class MusicPage {

  constructor(public navCtrl: NavController) {



  }
getTravelMusic(){
	this.navCtrl.push(TravelPageMusic);

}
getFamilyMusic(){
	this.navCtrl.push(FamilyPageMusic);

}
getPartyMusic(){
	this.navCtrl.push(PartyPageMusic);

}
}
