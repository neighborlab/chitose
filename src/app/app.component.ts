import { Component } from '@angular/core';
import { LoggerService } from '../bibi/logger.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  constructor( public loggerService: LoggerService )
  {
    loggerService.timerStart("TIME");
    loggerService.error("EEEEE");
    loggerService.info();
    loggerService.info("IIIII");
    loggerService.info("IIIII","JJJJJ","KKKKK");
    loggerService.debug("DDDDD");
    loggerService.trace("TTTTT");
    loggerService.timerStop("TIME");
  }
}
