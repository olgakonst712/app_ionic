import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {Camera} from '@ionic-native/camera';

import { MusicPage } from '../pages/music/music';
import { NewsPage } from '../pages/news/news';
import { VideoPage } from '../pages/video/video';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { TravelPage } from '../pages/videos/travel';
import { FamilyPage } from '../pages/videos/family';
import { PartyPage } from '../pages/videos/party';
import { TravelPageMusic } from '../pages/musics/travel';
import { FamilyPageMusic } from '../pages/musics/family';
import { PartyPageMusic } from '../pages/musics/party';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';





const config = {
   apiKey: "AIzaSyCK2YzYTJ48-xok3AZbf_A-CdjESSvOGv8",
  authDomain: "photoapp-best.firebaseapp.com",
   databaseURL: "https://photoapp-best.firebaseio.com",
   projectId: "photoapp-best",
  storageBucket: "",
   messagingSenderId: "574550958076"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    MusicPage,
    NewsPage,
    VideoPage,
    TabsPage,
    WelcomePage,
    LoginPage,
    TravelPage,
    FamilyPage,
    PartyPage,
    TravelPageMusic,
    FamilyPageMusic,
    PartyPageMusic
  ],
  imports: [
    BrowserModule,
    
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MusicPage,
    NewsPage,
    VideoPage,
    TabsPage,
    WelcomePage,
    LoginPage,
    TravelPage,
    FamilyPage,
    PartyPage,
    TravelPageMusic,
    FamilyPageMusic,
   PartyPageMusic
  ],
  providers: [
    StatusBar,
    SplashScreen,
     //FirebaseProvider,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
