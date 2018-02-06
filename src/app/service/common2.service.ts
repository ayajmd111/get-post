import { Injectable } from '@angular/core';
import {Observable}  from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http}  from '@angular/http';


@Injectable()
export class Common2Service {

  constructor(private http:Http) { }
  
  
  postData(url, data):Observable<any>{
    return this.http.post(url, data)
      .map(res => res.json());
  }

  postData2(url, data):Observable<any>{
    return this.http.post(url, data)
      .map(res => res.json());
  }

  regabout(url):Observable<any>
  {
    return this.http.get(url)
    .map(res =>res.json());
  }

}
