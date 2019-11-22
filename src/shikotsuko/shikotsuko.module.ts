import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkButtonComponent } from './sk-button/sk-button.component';

/**
 * 共通UIコンポーネントライブラリ
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SkButtonComponent],
  exports: [SkButtonComponent]
})
export class ShikotsukoModule { }