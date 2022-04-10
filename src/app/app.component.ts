import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
    `<div>
      <h1>{{title}}</h1>
      <app-loading></app-loading>
      <app-heroes></app-heroes>
    </div>`,
  styles: [`
    div
      /* position: absolute */
      display: flex
      flex-direction: column
      align-items: center
      height: 100vh
      width: 100vw
      background-color: #262626
    h1
      font-size: 3rem
  `]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
