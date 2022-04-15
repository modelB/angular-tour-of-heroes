import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../types/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  template: `
    <div *ngIf="hero" class="selected-hero-wrap">
      <label for="hero-name">Hero name: </label>
      <input id="hero-name" [(ngModel)]="hero.name" placeholder="name" />
    </div>
    <div class='selected-hero-wrap'>


    <button (click)='save()'>Save</button>
    <button (click)='goBack()'>Back</button>
</div>
  `,
  styles: [
    `
    .selected-hero-wrap
      margin-top: 35px
      font-size: 1.3rem
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

  save(): void {
    if (this.hero){
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }
}
