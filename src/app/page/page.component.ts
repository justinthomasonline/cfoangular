import { Contactform } from './../contactform';
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
Contactform = new Contactform();


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

  isContactpage(isContactPage)
  {

    if(isContactPage==1)
     {
     return true;
     }else
     {
       return false;
     }

  }

  contactSubmit()
  {
    this._pageService.postContactPage(this.Contactform)
    .subscribe(
      data=>console.log('sucess',data),
      error=>console.error('Error', error)
    );
  }


}
