import { Component, OnInit } from '@angular/core';
import {Common2Service} from '../../service/common2.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ayaj={}

  constructor(private cmnsvc:Common2Service) { }
  login()
  {
    var url="/api/register";
    this.cmnsvc.postData2(url, this.ayaj)
    .subscribe(data => {
      
              console.log(data);
            })


  }

  ngOnInit() {
  }

}
