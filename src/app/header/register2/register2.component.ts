import { Component, OnInit } from '@angular/core';
import {Common2Service} from '../../service/common2.service';


@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit {
  ayaj={};
  constructor(private Common2Service:Common2Service) {
    
   }
   employee()
   {
      var url = "/api/employee/create";
     this.Common2Service.postData(url, this.ayaj)
       .subscribe(data => {
 
         console.log(data);
       })

    }

  ngOnInit() {
  }

}
