import { PageService } from './../page.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  
})
export class PageComponent implements OnInit {
public pagename = "";
public pagedetails=[];

constructor(private route: ActivatedRoute, private _pageService:PageService) { 

 
  

}

  ngOnInit(): void { 
    
    this.route.paramMap.subscribe(params => {
      this.pagename = params.get('pagename');

      this._pageService.getPageDetails(this.pagename)
      .subscribe((data)=>{this.pagedetails = data;
      console.log(this.pagedetails);
      });
       
     });
   

     
     
      

  }

 


  

  hasContentMore(content_more_count)
  {
     if(content_more_count>0)
     {
     return true;
     }else
     {
       return false;
     }
     
  }

}
