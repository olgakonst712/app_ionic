import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
selector: 'page-travel',
template: `
<ion-header>
  <ion-navbar>
    <ion-title>
      
    </ion-title>
  </ion-navbar>
</ion-header>

<ion-content>
<iframe style="display:block" width="100%" height="50%" src="https://www.youtube.com/embed/_-S7k7wf4Ws" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<iframe style="display:block" width="100%" height="50%" src="https://www.youtube.com/embed/KmwZbu5269w" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
<iframe style="display:block" width="100%" height="50%" src="https://www.youtube.com/embed/RsZSQdIFA44" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
<iframe style="display:block" width="100%" height="50%" src="https://www.youtube.com/embed/W1XFNI66LHA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>



</ion-content>



`
})
export class TravelPage {

constructor(public navCtrl: NavController) {

}
}