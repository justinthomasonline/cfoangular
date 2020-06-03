import { Contactform } from './contactform';
import { Ipage } from './page';
import{ IHome } from './page';
// import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PageService {
  private _url:string= 'http://localhost/adminCms/Api/index/';
  private _urlHome:string= 'http://localhost/adminCms/Api/homePage/';
  private _urlContact:string= 'http://localhost/adminCms/Api/contact/';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http:HttpClient) { }

  getPageDetails(pagename):Observable<Ipage[]>
  {
    return this.http.get<Ipage[]>(this._url+pagename);
  }

  getHomePageDetails():Observable<IHome[]>
  {
    return this.http.get<IHome[]>(this._urlHome);
  }

  postContactPage(contact:Contactform)
  {
    
    return this.http.post<any>(this._urlContact,contact);
  }
}
