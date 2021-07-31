import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  activeUsers: string[]  = ['Priya', 'Kavi'];
  inactiveUsers: string[] = ['Visha', 'Nandhu'];

  constructor(private counterService: CounterService) { }

  setToActive(user: string): void {
    this.activeUsers.push(user);
    this.inactiveUsers.splice(this.inactiveUsers.indexOf(user), 1);
    this.counterService.log();
  }

  setToInactive(user: string): void {
    this.inactiveUsers.push(user);
    this.activeUsers.splice(this.activeUsers.indexOf(user), 1);
    this.counterService.log();
  }
}
