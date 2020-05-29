import { MenusService } from './../menus.service';
import { Component, OnInit } from '@angular/core';

declare var animatecomponent;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public headerMenu=[];
  
  constructor( private _menuService:MenusService) { }

  ngOnInit():void {

    this._menuService.getHeaderMenuDetails('header')
    .subscribe((data)=>{this.headerMenu = data;
    console.log(this.headerMenu);
    }); 
  }


  hasSubMenu(submenucount)
    {
    
        if(submenucount>0)
        {
          return true;
        }else
        {
          return false;
        }
    }

    callcomponentanimation()
    {
      animatecomponent();
    }
    
}
