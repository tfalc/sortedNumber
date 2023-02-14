import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'random-numbers';
  num1 = 0;
  num2 = 0;
  num3 = 0;
  num4 = 0;
  num5 = 0;
  num6 = 0;

  generateRandomNumber(): number {
    return Math.floor(Math.random() * 60) + 1;
  }

  generateNumbers(): void {
    let numbers: number[] = [];
    let currentNumber;

    do {
      currentNumber = this.generateRandomNumber();
      if (!numbers.includes(currentNumber)) {
        numbers.push(currentNumber);
      }
    } while (numbers.length < 6);

    this.num1 = numbers[0];
    this.num2 = numbers[1];
    this.num3 = numbers[2];
    this.num4 = numbers[3];
    this.num5 = numbers[4];
    this.num6 = numbers[5];
  }
}