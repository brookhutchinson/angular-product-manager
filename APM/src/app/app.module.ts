// angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// feature modules
import { HomeModule } from './home/home.module';
import { ProductModule } from './product/product.module';

// app routing module
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';

@NgModule({
  // modules
  imports: [
    // angular modules
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    // feature modules
    HomeModule,
    ProductModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
