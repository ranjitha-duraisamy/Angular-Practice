import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {

  users: string[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.activeUsers;
  }

  setToInactive(e: Event, user: string) {
    e.preventDefault();
    this.userService.setToInactive(user);
  }

}
