import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../bibi/logger.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

/**
 * ログインコンポーネント
 */
export class LoginComponent implements OnInit {

  /**
   * エラーメッセージ
   */
  public message = '';

  /**
   * コンストラクタ
   * @param loggerService ロガー
   */
  constructor( private loggerService: LoggerService ){}

  /**
   * 初期化
   */
  ngOnInit() {
  }

  /**
   * ログイン
   */
  clickLogin() {
    this.loggerService.info("xxxxxxxxxxxxxxxxxx");
    this.message = 'You are my hero!';
  }
}