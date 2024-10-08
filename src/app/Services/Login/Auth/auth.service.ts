import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  setLoggedIn(value: boolean): void {
    this.loggedIn = value;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
