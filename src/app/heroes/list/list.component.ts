import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroName: string[]= ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];

  // propiedad de clase
  public deletedHeroe?: string;

  // void = quiere decir que el metodod no va arregreasar o a retornar nada
  removeLastHeroe(): void{

    // aca se llama la propieda de clase
    //pop remueve el ultumo elmemto de la lista y lo retorna
   this. deletedHeroe = this.heroName.pop();

  }
}
