import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit {

  users: string[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.inactiveUsers;
  }

  setToActive(e: Event, user: string): void {
    e.preventDefault();
    this.userService.setToActive(user);
  }

}
