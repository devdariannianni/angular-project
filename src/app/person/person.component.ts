import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPerson } from './person.interfaces';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  
  @Input() person!: IPerson;

  @Output() activatedPerson = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  activeStudent(){
    this.person.isStudent = true
    
    this.activatedPerson.emit(this.person)
    
    
  }



}
