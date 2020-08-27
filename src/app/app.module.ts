import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductcopyComponent } from './productcopy/productcopy.component';
import { NetPricePipe } from './net-price.pipe';
import {AuthenticationModule}  from './authentication/authentication.module';
import {CoreModule}  from './core/core.module';
import {MoviesModule}  from './movies/movies.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductcopyComponent,
    NetPricePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    CoreModule,
    MoviesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
