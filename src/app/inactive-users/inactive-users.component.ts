import { Component, EventEmitter, Input, Output } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  constructor(private userService: UserService) {}

  onSetToActive(id: number) {
    this.userService.activate(id);
  }

  getUsers(): string[] {
    return this.userService.getInactiveUsers();
  }
}
