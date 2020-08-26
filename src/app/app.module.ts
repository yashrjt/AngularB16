import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductcopyComponent } from './productcopy/productcopy.component';
import { NetPricePipe } from './net-price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductcopyComponent,
    NetPricePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
