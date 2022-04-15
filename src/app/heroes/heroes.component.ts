import { Component, OnInit } from '@angular/core';
import { Hero } from '../types/hero';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';
import { HEROES } from '../constants/mock-heros';

@Component({
  selector: 'app-heroes',
  template: `
    <ul class="heros-list">
      <div *ngFor="let hero of heroes" class="hero-flex">
        <a routerLink="/detail/{{ hero.id }}">
          <button type="button">
            {{ hero.name }}
          </button>
        </a>
        <button
          type="button"
          class="delete"
          title="Delete Hero"
          (click)="delete(hero)"
        >
          x
        </button>
      </div>
    </ul>
    <div class="new-hero">
      <label for="new-hero">New Hero Name: </label>
      <input id="new-hero" #heroName />
      <button
        type="button"
        class="add-button"
        (click)="add(heroName.value); heroName.value = ''"
      >
        Add Hero
      </button>
    </div>
  `,
  styles: [
    `
    .heros-list
      display: flex
      padding: 0
      flex-direction: row
      justify-content: center
      flex-wrap: wrap
      max-width: 400px

    .hero-flex
      display: flex
      align-items: flex-start
      margin: 2px

    .selected
      background-color: #7a7878
      color: #02c1c1
      border-color: #02c1c1

    .add-button
      height: 25px
      width: 80px
      margin-left: 8px
      &:hover
        background-color: black
    .delete
      height: 31px
      width: 17px
      padding: 0px 0px 2px 0px
      text-align: center
      vertical-align: middle
      line-height: 15px
      box-sizing: content-box
      margin-left: 0
      &:hover
        color: #ea2828
        border-color: #ea2828
  `,
  ],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  add(name: string) {
    name = name.trim();
    if (name) {
      this.heroService
        .addHero({ name } as Hero)
        .subscribe((hero) => this.heroes.push(hero));
    }
  }

  delete(hero: Hero) {
    if (hero) {
      this.heroes = this.heroes.filter((h) => h !== hero);
      this.heroService.deleteHero(hero.id).subscribe();
    }
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }
}
