import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  public countInactivation(name: string) {
    console.log(`user: ${name} active->inactive`);
  }

  public countActivation(name: string) {
    console.log(`user: ${name} inactive->active`);
  }
}
