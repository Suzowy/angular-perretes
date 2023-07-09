import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeRegistrationService {
  isLoggedIn: boolean = false;
  private registeredUsers: any[] = [];

  registerUser(user: any) {
    this.registeredUsers.push(user);
  }

  getRegisteredUsers() {
    return this.registeredUsers;
  }
}
