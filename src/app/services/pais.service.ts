import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'; 


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private _http: HttpClient) { 

  }


  public getPais(nombrePais:string):Observable<any>{
    console.log("service    "+nombrePais);
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host':  'covid-19-tracking.p.rapidapi.com', 
        'X-RapidAPI-Key': '5a3712cd30msh2ac57205312dfddp155d67jsn89f23d7b101e'
      })
    };
    return this._http.get("https://covid-19-tracking.p.rapidapi.com/v1/"+nombrePais, httpOptions);
  }


  public getAll():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host':  'covid-19-tracking.p.rapidapi.com', 
        'X-RapidAPI-Key': '5a3712cd30msh2ac57205312dfddp155d67jsn89f23d7b101e'
      })
    };
    return this._http.get("https://covid-19-tracking.p.rapidapi.com/v1", httpOptions);
  }

}
