import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'angular2-cookie/services/cookies.service';


import { AppComponent } from './app.component';

import { ChatroomComponent } from './components/chatroom/chatroom.component';

import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyBYCwMfyjk86saQhUJ15vKwyiDs6uV1tAY',
  authDomain: 'blocchat-3f022.firebaseapp.com',
  databaseURL: 'https://blocchat-3f022.firebaseio.com',
  storageBucket: 'blocchat-3f022.appspot.com',
  messagingSenderId: '496837187853'
};

@NgModule({
  declarations: [
    AppComponent,
    ChatroomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    NgbModule.forRoot()
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
