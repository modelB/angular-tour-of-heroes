import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <img class='gif' src='https://64.media.tumblr.com/66069db00a28cb99444c506c5c7540c6/tumblr_ojxou2D1bV1relaado1_400.gifv' />
  `,
  styles: [`
    .gif
      height: 200px
      position: fixed
      top: 15%
      left: 17%
      margin-top: -100px
      margin-left: -100px
    `]
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
