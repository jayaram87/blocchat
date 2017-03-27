import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import { Room } from '../Room';

@Injectable()
export class FirebaseService{
    rooms: FirebaseListObservable<Room[]>;
    
    constructor(private af: AngularFire) {
        
    }
    
    getRooms(){
        this.rooms = this.af.database.list('/rooms') as FirebaseListObservable<Room[]>;
        return this.rooms;
    }
    
    addRoom(newRoom){
        return this.rooms.push(newRoom);
    }
}

