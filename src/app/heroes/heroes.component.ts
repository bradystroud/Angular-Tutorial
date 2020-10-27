import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[]; // *1 Heroes list (empty here. This is the intialisation Syntax).
  selectedHero: Hero; // This becomes the hero that the user chooses to get more details on.


  // The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.
  constructor(private heroService: HeroService, private messageService: MessageService) {}
  // This was a question i just had and then the tutorial answered it.
  // It's like the writer actually took the time to consider what readers might not understan when writing the docs. Crazy.
  //
  // While you could call getHeroes() in the constructor, that's not the best practice.
  // Reserve the constructor for simple initialization such as wiring constructor parameters to properties.
  // The constructor shouldn't do anything.
  // It certainly shouldn't call a function that makes HTTP requests to a remote server as a real data service would.
  // Instead, call getHeroes() inside the ngOnInit lifecycle hook and
  // let Angular call ngOnInit() at an appropriate time after constructing a HeroesComponent instance.
  //

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}