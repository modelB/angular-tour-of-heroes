import { Component, OnInit } from '@angular/core';
import { Hero } from '../types/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-dashboard',
  template: `
    <h2>Top Heroes</h2>
    <div class="heroes-menu">
      <a *ngFor="let hero of heroes" routerLink="/detail/{{ hero.id }}">
        {{ hero.name }}
      </a>
    </div>

    <app-hero-search></app-hero-search>
  `,
  styles: [`
  div
    display: flex
  a
    color: #02c1c1
    margin-right: 10px

  `],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }
}
