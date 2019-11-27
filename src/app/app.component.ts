import { Component } from '@angular/core';
import { LoggerService } from '../bibi/logger.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

/**
 * アプリケーションコンポーネント
 */
export class AppComponent  {
  
  /**
   * コンストラクタ
   * @param loggerService ロガー
   */
  constructor( public loggerService: LoggerService )
  {
  }
}
