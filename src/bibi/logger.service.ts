import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  private level = 0;
  constructor() { }

  public info(msg:string):void{
    console.log( this.level + ":" + msg );
  }

}