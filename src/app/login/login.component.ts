import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoggerService } from '../../bibi/logger.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

/**
 * ログインコンポーネント
 */
export class LoginComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
   });

  /**
   * コンストラクタ
   * @param loggerService ロガー
   */
  constructor(
     private loggerService: LoggerService,
  ){}

  /**
   * 初期化
   */
  ngOnInit() {
  }

  /**
   * ログイン
   */
  onSubmit() {
    this.loggerService.info(JSON.stringify(this.form.value));
  }
}