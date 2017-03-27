import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Room } from './Room';
import { FormComponent } from './components/forms/formroom.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit {
  rooms: Room[];
  appState: string;
  
  constructor(private _firebaseService:FirebaseService) {
    
  }
  
  ngOnInit(){
    this._firebaseService.getRooms().subscribe(rooms => {
      this.rooms = rooms;
    });  
  }
  
  changeState(state){
    this.appState = state;
  }
  
  addRoom(id:string, userId:string){
    if(id, userId){
      var newRoom = {
        id: id,
        userId: userId
      }
    } else {
      alert("enter id and userId");
    }  
    this._firebaseService.addRoom(newRoom);
    this.changeState('default');
  }
  
}

