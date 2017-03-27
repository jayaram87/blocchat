import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  moduleId: module.id,
  selector: 'formRoom',
  templateUrl: './formroom.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./formroom.component.css'],
})

export class FormComponent{
  
  closeResult: string;
  
  constructor(private modalService: NgbModal) {
    
  }
  
  open(content: any) {
    this.modalService.open(content);
  }
    
}