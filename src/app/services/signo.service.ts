import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class SignoService {

  constructor(private _http: HttpClient) {
   }

   public getAllSignos():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-host": "zodiac-sign.p.rapidapi.com",
        "x-rapidapi-key": "5a3712cd30msh2ac57205312dfddp155d67jsn89f23d7b101e"
      })
    };
     return this._http.get("https://zodiac-sign.p.rapidapi.com/signs",httpOptions,);
  }


  public getSignosByDate(fecha:string):Observable<any>{
    console.log(fecha);
    
    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-host": "zodiac-sign.p.rapidapi.com",
      	"x-rapidapi-key": "5a3712cd30msh2ac57205312dfddp155d67jsn89f23d7b101e",
     	  "useQueryString": "true"
      })
    };
     
     return this._http.get("https://zodiac-sign.p.rapidapi.com/sign?date=1998-11-02",httpOptions);
  }



   /*
   public getSigno(dia:string,snombre:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
        "x-rapidapi-key": "5a3712cd30msh2ac57205312dfddp155d67jsn89f23d7b101e"
      })
    };
    //return this._http.post("https://sameer-kumar-aztro-v1.p.rapidapi.com/",{'sign':snombre , 'day':dia},httpOptions);
     // return this._http.post( "https://sameer-kumar-aztro-v1.p.rapidapi.com/?",{"sign":"aries","day": "today"},httpOptions);
     return this._http.post("https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=aries&day=today",httpOptions);
  }


  public getSigno2(dia:string,snombre:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
        "x-rapidapi-key": "5a3712cd30msh2ac57205312dfddp155d67jsn89f23d7b101e",
      })
    };
    return this._http.post("https://sameer-kumar-aztro-v1.p.rapidapi.com/",{'day':'today','aries':snombre},httpOptions);
  }

*/

}
