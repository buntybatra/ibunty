import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { RouteRoutingModule, routingComponents } from './route-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    RouteRoutingModule,
    HttpClientModule
  ],
  providers: [
    HeaderComponent,
    FooterComponent,
    HttpClient,
    HttpClientModule,
    HttpModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
