import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sk-button',
  templateUrl: './sk-button.component.html',
  styleUrls: ['./sk-button.component.css']
})
/**
 * 共通ボタンクラス
 */
export class SkButtonComponent implements OnInit {

  /**
   * ボタンに表示するラベル
   */
  @Input() label: string;
  
  /**
   * OnInit
   */
  ngOnInit() {
  }

}