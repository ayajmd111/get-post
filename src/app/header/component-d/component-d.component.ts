import { Component, OnInit,Input,Output } from '@angular/core';

@Component({
  selector: 'app-component-d',
  templateUrl: './component-d.component.html',
  styleUrls: ['./component-d.component.css'],
})
export class ComponentDComponent implements OnInit {
  @Input()
  child1:any;


  constructor() { }

  ngOnInit() {
  }

}
