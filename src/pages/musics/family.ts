import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera} from '@ionic-native/camera';

@Component({
selector: 'page-family',
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
  
  <img [src]="base64Image">
  <button (click)="prendrePhoto()"><ion-icon style="display:block; text-align:center; height:20px" ios="ios-camera-outline" md="md-camera"></ion-icon></button>
</ion-content>




`
})
export class FamilyPageMusic {

private base64Image: string;

constructor(public navCtrl: NavController, private camera: Camera) {

}

prendrePhoto() {
	const CameraOptions = {
	  sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
	  quality: 100,
	  destinationType: this.camera.DestinationType.DATA_URL,
	  encodingType: this.camera.EncodingType.JPEG,
	  mediaType: this.camera.MediaType.ALLMEDIA
	}

	this.camera.getPicture(CameraOptions).then((imageData) => {
	 // imageData is either a base64 encoded string or a file URI
	 // If it's base64:
	 this.base64Image = 'data:image/jpeg;base64,' + imageData;
	}, (err) => {
	 // Handle error
	});
}




}