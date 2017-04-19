import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Room } from './Room';
import { Messages } from './Messages';
import { ChatroomComponent } from './components/chatroom/chatroom.component';

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
  
  constructor(private _firebaseService:FirebaseService) {
    
  }
  
  ngOnInit(){
    this._firebaseService.getRooms().subscribe(rooms => {
      this.rooms = rooms;
    });  
    
    this._firebaseService.getMessages().subscribe(messages => {
      this.messages = messages;
    });
  }
  
  changeState(state){
    this.appState = state;
  }
  
  chatRoom(state, room){
    this.appState = state;
    this.room = room
  }
  
  addRoom(id:string, userId:string){
    if(id, userId){
      var newRoom = {
        id: id,
        userId: userId
      }
      this._firebaseService.addRoom(newRoom);
      this.changeState('default');
    } else {
      alert("enter id and userId");
      this.changeState('default');
    }  
  }  
    
  addMessage(room:string,message:string){
    if(message){
      var newMessage = {
        created_at: Date.now(),
        message: message,
        room_id: room
      }
      this._firebaseService.addMessage(newMessage);
      this.changeState('clear');
    } else {
      alert("Enter a message");
      this.changeState('clear');
    }  
  }
  
}

