import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numeros: number[] = [];

  gerarNumeros() {
    this.numeros = [];
    for (let i = 0; i < 6; i++) {
      const numero = Math.floor(Math.random() * 60) + 1;
      this.numeros.push(numero);
    }
  }
}
