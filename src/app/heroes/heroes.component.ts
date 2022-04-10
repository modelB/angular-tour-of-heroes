import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-heroes',
  template: `
    <div class="heroes-wrap">
      <h2>My Heroes</h2>
      <ul class="heros-list">
        <button *ngFor="let hero of heroes" (click)='onSelect(hero)'>{{ hero.name }}</button>
      </ul>

      <span *ngIf='selectedHero'>Selected hero: {{selectedHero.name}}</span>
    </div>
  `,
  styles: [
    `
    span
      margin-left: -30px
    h2
      text-decoration: underline
      color: #e2dfdf
    .heroes-wrap
      position: absolute
      left: 50%
      margin-left: -70px
    .heros-list
      margin-left: -36px
      display: flex
      flex-direction: column
    button
      font-family: none
      border: 1px solid #7a7878
      height:35px
      width: 120px
      margin: 3px 0
      background-color: #3f3d3d
      color: #e2dfdf
      &:hover
        background-color: #7a7878
        cursor: pointer
        color: #02c1c1
  `,
  ],
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero | undefined

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  constructor() {}

  ngOnInit(): void {}
}
