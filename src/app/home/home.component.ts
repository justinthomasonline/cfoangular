import { Component, OnInit } from '@angular/core';
import { PageService } from './../page.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public pagedetails=[];




  constructor(private _pageService:PageService) { }

  ngOnInit(): void {

    this._pageService.getHomePageDetails()
    .subscribe((data)=>{this.pagedetails = data;
    console.log(this.pagedetails);
    });

    
    
  }

  
}
