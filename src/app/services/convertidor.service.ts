import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'; 


@Injectable({
  providedIn: 'root'
})
export class ConvertidorService {

  constructor(private _http: HttpClient) { }

  public getCambio(de:string,a:string,cantidad:number):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-host": "community-neutrino-currency-conversion.p.rapidapi.com",
        "x-rapidapi-key": "6ab23d37fcmsh1ea2038c95f42adp1bb70fjsnf6c931dec9f1",
      })
    };
    return this._http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert",{'from-value':cantidad , 'from-type':de,'to-type':a},httpOptions);
  }

}
