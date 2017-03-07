import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rooms: FirebaseListObservable<any[]>;
  
  constructor(private af: AngularFire) {
    this.rooms = af.database.list('/rooms');
  }
  
}
