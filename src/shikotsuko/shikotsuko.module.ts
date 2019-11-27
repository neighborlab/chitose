import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkButtonComponent } from './sk-button/sk-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SkButtonComponent],
  exports: [SkButtonComponent]
})

/**
 * 共通UIコンポーネントライブラリ
 */
export class ShikotsukoModule { }