import { Component } from '@angular/core';
import { LoggerService } from '../bibi/logger.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  constructor( public loggerService: LoggerService )
  {
  }
}
