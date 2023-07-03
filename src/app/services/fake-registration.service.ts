import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeRegistrationService {
  private registeredUsers: any[] = [];

  registerUser(user: any) {
    this.registeredUsers.push(user);
  }

  getRegisteredUsers() {
    return this.registeredUsers;
  }
}
