import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonService } from "./services/person.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule    
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
