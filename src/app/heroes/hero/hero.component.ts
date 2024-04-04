import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'iroman'
  public age:  number = 45;


  get capitalizedName(): string {
    return this.name.toUpperCase();
  }
  getHeroDescription(){
      return `${this.name} - ${this.age}`;
  }

  chageHero(): void{
this.name = 'Spiderman'
  }
  chageAge():void {
this.age = 25;
  }

  resetForm():void{
    this.name = 'iroman'
    this.age= 45
  }
};
