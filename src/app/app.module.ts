import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing.module';
import { ShikotsukoModule } from '../shikotsuko/shikotsuko.module';
import { BibiModule } from '../bibi/bibi.module';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    BibiModule.forRoot(),
    ShikotsukoModule
     ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
