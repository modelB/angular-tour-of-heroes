import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Hero } from '../types/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-search',
  template: `
    <div id="search-component">
      <label for="search-box">Hero Search: </label>
      <input #searchBox id="search-box" (input)="search(searchBox.value)" />

      <ul [ngClass]="{ 'search-result': (heroes$ | async)?.length }">
        <li *ngFor="let hero of heroes$ | async">
          <a class="hero-item" routerLink="/detail/{{ hero.id }}">
            {{ hero.name }}
          </a>
        </li>
      </ul>
    </div>
  `,
  styles: [
    `
  #search-component
    margin: 20px
  .search-result
    border: 1px solid #7a7878
    margin: 0px
  .hero-item
    color: #02c1c1
  li
    list-style-type: none
  `,
  ],
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term))
    );
  }
}
