import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-practice';
  numbersArr: number[] = [1, 2, 3, 4];
  selectedNumber: number = 3;
}
