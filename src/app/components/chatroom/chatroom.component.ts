import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { Messages } from '../../Messages';

@Component({
  moduleId: module.id,
  selector: 'chatroom',
  templateUrl: './chatroom.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./chatroom.component.css'],
    providers: [FirebaseService]
})

export class ChatroomComponent{
  messages: Messages[];
  appState: string;
    
  constructor(private _firebaseService:FirebaseService) {
    
  }
  
  ngOnInit(){
      //this._firebaseService.getMessages().subscribe(messages => { messages =>
        //this.messages = messages;
      //});  
  }
  
  changeState(state){
    this.appState = state;
  }
    
}