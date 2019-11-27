import { NgModule, ModuleWithProviders } from '@angular/core';
import { LoggerService } from './logger.service';

@NgModule({
})

/**
 * 共通ロガーライブラリ
 */
export class BibiModule {
  static forRoot() : ModuleWithProviders{
    return {
      ngModule: BibiModule,
      providers: [ LoggerService ]
    }
  }
 }