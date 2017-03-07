import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

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
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
