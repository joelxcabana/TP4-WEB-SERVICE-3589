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
        "x-rapidapi-key": "5a3712cd30msh2ac57205312dfddp155d67jsn89f23d7b101e",
      })
    };
    return this._http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert",{'from-value':cantidad , 'from-type':de,'to-type':a},httpOptions);
  }

}
