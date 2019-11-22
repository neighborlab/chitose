import { NgModule, ModuleWithProviders } from '@angular/core';
import { LoggerService } from './logger.service';

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