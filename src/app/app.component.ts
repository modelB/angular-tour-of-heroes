import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
    <h1>{{ title }}</h1>
    <app-loading></app-loading>
    <nav>
      <a routerLink="/heroes"><button>Heroes</button></a>
      <a routerLink="/dashboard"><button>Dashboard</button></a>
    </nav>
    <router-outlet></router-outlet>
    <app-messages></app-messages>
  </div>`,
  styles: [
    `
    div
      /* position: absolute */
      display: flex
      text-align: center
      flex-direction: column
      align-items: center
      height: 100vh
      width: 100vw

    h1
      font-size: 3rem
    a
    button
      color: #c151ff
      text-decoration: none
      border-color: #c151ff
      &:hover
        background-color: black
    nav
      display: flex
  `,
  ],
})
export class AppComponent {
  title = 'Tour of Heroes';
}
