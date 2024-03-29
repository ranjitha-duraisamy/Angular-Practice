import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  count: number = 0;

  constructor() { }

  log() {
    this.count++;
    console.log('Count: '+this.count);
  }
}
