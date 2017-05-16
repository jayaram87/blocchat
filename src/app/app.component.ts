import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Room } from './Room';
import { Messages } from './Messages';
import { ChatroomComponent } from './components/chatroom/chatroom.component';
import { CookieService } from 'angular2-cookie/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit {
  rooms: Room[];
  messages: Messages[];
  room: string;
  appState: string;
  message: string;
  
  constructor(private _firebaseService:FirebaseService, private _cookieService:CookieService) {
    
  }
  
  ngOnInit(){
    this._firebaseService.getRooms().subscribe(rooms => {
      this.rooms = rooms;
    });  
    
    this._firebaseService.getMessages().subscribe(messages => {
      this.messages = messages;
    });
  }
  
  getCookie(){
    //console.log(this._cookieService.get(key));
    return this._cookieService.get("Username");
  }
  
  setCookie(key: string, value: string){
    return this._cookieService.put(key, value);
  }
  
  changeState(state){
    this.appState = state;
  }
  
  chatRoom(state, room){
    this.appState = state;
    this.room = room;
    //this.messages = this._firebaseService.displayMessages(room.$key);
  }
  
  //displayMessages(room){
    //this.messages = this._firebaseService.displayMessages(room);
  //}
  
  addRoom(id:string){
    if(id){
      var newRoom = {
        id: id,
        userId: this.getCookie()
      }
      this._firebaseService.addRoom(newRoom);
      console.log(newRoom);
      this.changeState('default');
    } else {
      alert("enter room id");
      this.changeState('default');
    }
  }  
    
  addMessage(room:string,message:string){
    if(message){
      var newMessage = {
        created_at: Date.now(),
        message: message,
        room_id: room,
        userId: this.getCookie()
      }
      this._firebaseService.addMessage(newMessage);
      console.log(newMessage);
      this.message = null;
    } else {
      alert("Enter a message");
      this.message = null;
    }  
  }
  
  userName(room){
    if(room.userId === null){
      room.userId = this.getCookie();
    }
  }
  
}

