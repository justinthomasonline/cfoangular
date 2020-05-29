import { Imenus } from './menus';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MenusService {

  
  private _url:string= 'http://localhost/adminCms/Api/getmenu/';

  constructor(private http:HttpClient) { }

  getHeaderMenuDetails(menutype): Observable<any>
  {
    return this.http.get<Imenus[]>(this._url+menutype);
    
  }
}
