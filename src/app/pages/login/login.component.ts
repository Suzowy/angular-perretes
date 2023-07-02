import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;
  loggedInUser: string = '';

  constructor() {
    this.username = '';
    this.password = '';
    this.loggedInUser = '';
  }

  login() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);


    this.loggedInUser = this.username;
    this.limpiar();
  }
  limpiar() {
    throw new Error('Method not implemented.');
  }
}
