import { NgModule, ModuleWithProviders } from '@angular/core';
import { LoggerService } from './logger.service';

/**
 * 共通ロガーライブラリ
 */
@NgModule({
})
export class BibiModule {
  static forRoot() : ModuleWithProviders{
    return {
      ngModule: BibiModule,
      providers: [ LoggerService ]
    }
  }
 }