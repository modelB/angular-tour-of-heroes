import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
    `<div>
      <h1>{{title}}</h1>
    </div>`,
  styles: [`
    div
      display: flex
      justify-content: center
    h1
      color: teal
      font-family: 'Courier New'
      font-size: 3rem
  `]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
