// angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// feature modules
import { HomeModule } from './home/home.module';

// components
import { AppComponent } from './app.component';

@NgModule({
  // modules
  imports: [
    // angular modules
    BrowserModule,
    // feature modules
    HomeModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
