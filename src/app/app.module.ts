import { MenusService } from './menus.service';
import { SafeHtmlPipe } from './safe-html';
import { PageService } from './page.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { HttpClientModule } from '@angular/common/http';
import { TruncateTextPipe } from './truncate-text.pipe';
import { FormsModule } from   '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageComponent,
    SafeHtmlPipe,
    TruncateTextPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PageService,MenusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
