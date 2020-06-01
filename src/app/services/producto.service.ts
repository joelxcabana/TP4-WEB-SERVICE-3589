import { Injectable } from '@angular/core';


import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'; 


@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  constructor(private _http: HttpClient) {

   }


   public getProductos(palabra:string):Observable<any>{
    return this._http.get("https://api.mercadolibre.com/sites/MLA/search?q="+palabra);
  }

  public getProductosByCategory(categoria:string):Observable<any>{
    return this._http.get("https://api.mercadolibre.com/sites/MLA/search?category="+categoria);
  }

  }
