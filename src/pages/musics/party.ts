import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
selector: 'page-party',
template: `
<ion-header>
  <ion-navbar>
    <ion-title>
      
    </ion-title>
  </ion-navbar>
</ion-header>

<ion-content>
<img src = "../assets/imgs/photo2.jpg" style="display:block; width: 100%" alt="">
  <img src = "../assets/imgs/photo3.jpg" style="display:block; width: 100%" alt="">
  <img src = "../assets/imgs/photoimg.JPG" style="display:block; width: 100%" alt="">
  <img src = "../assets/imgs/photoimg2.JPG" style="display:block; width: 100%" alt="">
  <img src = "../assets/imgs/photoimg4.JPG" style="display:block; width: 100%" alt="">
  <img src = "../assets/imgs/photo.jpg" style="display:block; width: 100%" alt="">



</ion-content>
   



`
})
export class PartyPageMusic {

constructor(public navCtrl: NavController) {

}
}