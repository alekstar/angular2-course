import { Injectable } from '@angular/core';
import {CounterService} from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activeUsers: string[] = ['Max', 'Anna'];
  inactiveUsers: string[] = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) { }

  public inactivate(id: number) {
    const userName = this.activeUsers[id];
    this.inactiveUsers.push(userName);
    this.activeUsers.splice(id, 1);
    this.counterService.countInactivation(userName);
  }

  public activate(id: number) {
    const userName = this.inactiveUsers[id];
    this.activeUsers.push(userName);
    this.inactiveUsers.splice(id, 1);
    this.counterService.countActivation(userName);
  }

  public getActiveUsers(): string[] {
    return this.activeUsers;
  }

  public getInactiveUsers(): string[] {
    return this.inactiveUsers;
  }
}
