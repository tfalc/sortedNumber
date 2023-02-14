import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num1!: number;
  num2!: number;
  num3!: number;
  num4!: number;
  num5!: number;
  num6!: number;

  gerarNumeros() {
    this.num1 = Math.floor(Math.random() * 60) + 1;
    this.num2 = Math.floor(Math.random() * 60) + 1;
    this.num3 = Math.floor(Math.random() * 60) + 1;
    this.num4 = Math.floor(Math.random() * 60) + 1;
    this.num5 = Math.floor(Math.random() * 60) + 1;
    this.num6 = Math.floor(Math.random() * 60) + 1;
  }
  
}
