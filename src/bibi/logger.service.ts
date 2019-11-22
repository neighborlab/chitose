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
  private level:Loglevel = Loglevel.trace;
  
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
    if(this.level >= Loglevel.error)
    {
      if( 0 == args.length)
      {
        console.error();
      }
      else if( 1 == args.length)
      {
        console.error(args[0]);
      }else
      {
        console.error(args);
      }
    }
  }

  /**
   * 情報。実行時の何らかの注目すべき事象（開始や終了など）。コンソール等に即時出力することを想定。従ってメッセージ内容は簡潔に止めるべき 
   */
  public info(...args: string[]):void
  {
    if(this.level >= Loglevel.info)
    {
      if( 0 == args.length)
      {
        console.info();
      }
      else if( 1 == args.length)
      {
        console.info(args[0]);
      }
      else
      {
        console.info(args);
      }
    }
  }

  /**
   * デバッグ用の情報。システムの動作状況に関する詳細な情報。コンソールではなくログ上にだけ出力することを想定 
   */
  public debug(...args: string[]):void
  {
    if(this.level >= Loglevel.debug)
    {
      if( 0 == args.length)
      {
        console.log();
      }
      else if( 1 == args.length)
      {
        console.log(args[0]);
      }
      else
      {
        console.log(args);
      }
    }
  }

  /**
   * トレースログを出力
   */
  public trace(...args: string[]):void
  {
    if(this.level >= Loglevel.trace)
    {
      if( 0 == args.length)
      {
        console.trace();
      }
      else if( 1 == args.length)
      {
        console.trace(args[0]);
      }
      else
      {
        console.trace(args);
      }
    }
  }

  /**
   * タイマー開始
   * INFOログで動作します
   */
  public timerStart(label:string)
  {
    if(this.level >= Loglevel.info)
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
    if(this.level >= Loglevel.info)
    {
      console.timeEnd(label);
    }
  }
}