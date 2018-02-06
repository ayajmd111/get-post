import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../service/common.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  details:any;

  constructor(private commonSvc:CommonService) { }

  ngOnInit() 
  {
    var url="assets/data/data.json"
    this.commonSvc.getAbout(url)
    .subscribe(data=>{
      console.log(data);
      this.details=data;
    })

  }

}
