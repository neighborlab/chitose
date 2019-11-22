import { Injectable } from '@angular/core';
import { Loglevel } from './loglevel.enum';

/**
 * ロガー
 */
@Injectable()
export class LoggerService {

  /**
   * 出力ログレベル
   */
  private level:Loglevel = Loglevel.info;
  
  /**
   * コンストラクタ
   */
  constructor() {

   }

  /**
   * エラー。予期しないその他の実行時エラー。コンソール等に即時出力することを想定 
   */
  public error(...args: string[])
  {
    if(this.level <= Loglevel.error)
    {
      console.error(args);
      console.trace();
    }
  }

  /**
   * 情報。実行時の何らかの注目すべき事象（開始や終了など）。コンソール等に即時出力することを想定。従ってメッセージ内容は簡潔に止めるべき 
   */
  public info(...args: string[]):void
  {
    if(this.level <= Loglevel.info)
    {
      console.info(args);
    }
  }

  /**
   * デバッグ用の情報。システムの動作状況に関する詳細な情報。コンソールではなくログ上にだけ出力することを想定 
   */
  public debug(...args: string[]):void
  {
    if(this.level <= Loglevel.debug)
    {
      console.log(args);
    }
  }

  /**
   * タイマー開始
   * INFOログで動作します
   */
  public timerStart(label:string)
  {
    if(this.level <= Loglevel.info)
    {
      console.time(label);
    }
  }

  /**
   * タイマー終了
   * INFOログで動作します
   */
  public timerStop(label:string)
  {
    if(this.level <= Loglevel.info)
    {
      console.timeEnd(label);
    }
  }
}