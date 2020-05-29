import { Ipage } from './page';
import{ IHome } from './page';
// import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PageService {
  private _url:string= 'http://localhost/adminCms/Api/index/';
  private _urlHome:string= 'http://localhost/adminCms/Api/homePage/';

  constructor(private http:HttpClient) { }

  getPageDetails(pagename):Observable<Ipage[]>
  {
    return this.http.get<Ipage[]>(this._url+pagename);
  }

  getHomePageDetails():Observable<IHome[]>
  {
    return this.http.get<IHome[]>(this._urlHome);
  }
}
