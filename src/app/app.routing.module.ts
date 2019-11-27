import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [ 
    LoginComponent,
    PageComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'page', component: PageComponent },
      { path: '**', redirectTo: 'login' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
/**
 * ルーティング
 */
export class AppRoutingModule {}


