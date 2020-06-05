import { Component, OnInit } from '@angular/core';
import { MenusService } from './../menus.service';

declare var animatecomponent;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public footerMenu=[];
 public copyrightyear = new Date().getFullYear();
 
  constructor(private _menuService:MenusService) { }

  ngOnInit(): void {

    this._menuService.getHeaderMenuDetails('footer')
    .subscribe((data)=>{this.footerMenu = data;
    console.log(this.footerMenu);
    }); 

  }


  callcomponentanimation()
    {
        animatecomponent();
    }

}
