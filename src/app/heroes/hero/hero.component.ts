import { Component } from '@angular/core';

// Component es un decorador
@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string ="Ironman";
  public age: number= 45;

  // get es una propiedad que funciona, se ve y se usa como un metodo
  get capitalizedName(): string{

    // con el return this se esta capitalizando el nombre  del heroe
    return this.name.toUpperCase();
  }

  // Metodo si no se define que es privado por defecto se infiere que es publico
  getHeroDescription():string{

    return `${ this.name } - ${ this.age}`;
  }

  changeHero(): void{
    this.name = 'Spiderman';
  }

  changeEge():void{
    this.age=25;
  }

  resetForm():void{
    this.name='ironman';
    this.age=45;
  }
}
