import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../bibi/logger.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public message = '';

  constructor( private loggerService: LoggerService ){}

  ngOnInit() {
  }

  clickLogin() {
    this.loggerService.info("xxxxxxxxxxxxxxxxxx");

    this.message = 'You are my hero!';
  }
}