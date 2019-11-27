import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ShikotsukoModule } from '../shikotsuko/shikotsuko.module';
import { BibiModule } from '../bibi/bibi.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageComponent } from './page/page.component';

@NgModule({
  imports:[
    BrowserModule,
    FormsModule,
    BibiModule.forRoot(),
    ShikotsukoModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'page', component: PageComponent },
      { path: '**', redirectTo: 'login' }
    ]),
  ],
  declarations:[
    AppComponent,
    LoginComponent,
    PageComponent
  ],
  bootstrap:[
    AppComponent
  ],
})

/**
 * アプリケーションモジュール
 */
export class AppModule { }
