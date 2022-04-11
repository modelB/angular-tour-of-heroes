import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-heroes',
  template: `
    <div class="heroes-wrap">
      <ul class="heros-list">
        <a *ngFor="let hero of heroes" routerLink="/detail/{{ hero.id }}">
          <button>
            {{ hero.name }}
          </button>
        </a>
      </ul>
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

    .selected
      background-color: #7a7878
      color: #02c1c1
      border-color: #02c1c1
  `,
  ],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  constructor(
    private heroService: HeroService,
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }
}
