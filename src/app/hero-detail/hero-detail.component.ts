import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  template: `
    <div *ngIf="hero" class="selected-hero-wrap">
      <label for="hero-name">Hero name: </label>
      <input id="hero-name" [(ngModel)]="hero.name" placeholder="name" />
    </div>
    <button (click)='goBack()'>Back</button>
  `,
  styles: [
    `
    .selected-hero-wrap
      margin-top: 35px
      font-size: 1.3rem
    label
    input
      font-size: 1.3rem
      font-family: 'Courier New'
      background-color: #262626
      border: 1px solid #7a7878
      border-radius: 2px
      color: #02c1c1
      text-indent: 8px
      font-weight: normal
    button
      margin: 10px
  `,
  ],
})
export class HeroDetailComponent implements OnInit {
  hero?: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  goBack(): void {
    this.location.back();
  }
}
