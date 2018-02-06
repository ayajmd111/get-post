import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {
  @Input() 
  child;
   @Output()       changeName = new EventEmitter(); 
  changevalue:any;
  
  constructor() { }

  ngOnInit() {
  }
  sendmydata(){
    this.changevalue= { name1:"siva",
    name2:"reddy"}
    this.changeName.emit(this.changevalue)
  }

}
