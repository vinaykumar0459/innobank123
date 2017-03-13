import {Injectable}from "@angular/core";
import {Http,Response,Headers} from "@angular/http";
import 'rxjs/add/operator/map';
@Injectable()
export class AppService{
    url:string;
    data:any;
public static ServerLocation:string = "http://localhost:3000/";
constructor(private _http:Http){}
getService(){
    var  headers = new Headers;
     headers.append('Content-Type','application/json; charset=utf-8');
return this._http.get(AppService.ServerLocation+this.url,{headers:headers}).map(res=>res.json());
}
postService(){
      var  headers = new Headers;
      console.log("AppService",AppService.ServerLocation+this.url);
      console.log("data",this.data);
     headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(AppService.ServerLocation+this.url,this.data,{headers:headers}).map(res=>res.json());
}
}