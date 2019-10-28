import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sk-button',
  templateUrl: './sk-button.component.html',
  styleUrls: ['./sk-button.component.css']
})
export class SkButtonComponent implements OnInit {

  @Input() label: string;
  constructor() { }

  ngOnInit() {
  }

}