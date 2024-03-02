import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
      <h3>Contador: {{contador}}</h3>
      <button (click)="Opcion(+1)">+1</button>
      <button (click)="Resetear()">Resetear</button>
      <button (click)="Opcion(-1)">-1</button>
    `
})
export class CounterComponent{

  public contador: number = 10;

  Opcion(valor:number):void {
    this.contador += valor;
  }

  Resetear(){
    this.contador = 10;
  }
}
