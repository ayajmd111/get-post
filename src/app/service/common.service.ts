import{Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class CommonService{
constructor(private http:Http){}

    getAbout(url): Observable<any> {
        return this.http.get(url)
          .map(res=> res.json());
    
}

}