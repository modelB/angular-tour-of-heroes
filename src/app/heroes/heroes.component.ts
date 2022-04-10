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

      <span class='selected-hero' *ngIf='selectedHero'>Selected hero: {{selectedHero.name}}</span>
    </div>
  `,
  styles: [
    `
    h2
      text-decoration: underline
      color: #e2dfdf
    .selected-hero
      text-align: center
    .heros-list
      display: flex
      padding: 0
      flex-direction: row
      justify-content: center
      flex-wrap: wrap
      max-width: 400px
    button
      font-family: none
      font-size: 1rem
      border: 1px solid #7a7878
      height:35px
      width: 120px
      border-radius: 3px
      margin: 3px
      background-color: #3f3d3d
      color: #e2dfdf
      &:hover
        background-color: #7a7878
        cursor: pointer
        color: #02c1c1
        border-color: #02c1c1
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
