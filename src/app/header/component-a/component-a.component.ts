import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {

  constructor() { }
 obj1={ name1:"karthik",
        name2:"ayaj"}
        getingfromchild(e){
           this.obj1 = e;
        }
    

  ngOnInit() {
  }

}
