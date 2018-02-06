import { Component, OnInit } from '@angular/core';
import {Common2Service} from '../../service/common2.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  details:any;
  constructor(private commonsvc:Common2Service) { }

  ngOnInit() {
    var x="assets/data/data.json"
    this.commonsvc.regabout(x)
    .subscribe(data=>{
      console.log(data);
      this.details=data;
    })

    
  }

}
