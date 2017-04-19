import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import { Room } from '../Room';
import { Messages } from '../Messages';

@Injectable()
export class FirebaseService{
    rooms: FirebaseListObservable<Room[]>;
    messages: FirebaseListObservable<Messages[]>;
    
    constructor(private af: AngularFire) {
        
    }
    
    getRooms(){
        this.rooms = this.af.database.list('/rooms') as FirebaseListObservable<Room[]>;
        return this.rooms;
    }
    
    getMessages(){
        this.messages = this.af.database.list('/messages') as FirebaseListObservable<Messages[]>;
        return this.messages;
    }
    
    addRoom(newRoom){
        return this.rooms.push(newRoom);
    }
    
    addMessage(newMessage){
        this.messages = this.af.database.list('/messages') as FirebaseListObservable<Messages[]>;
        return this.messages.push(newMessage);
    }
}

