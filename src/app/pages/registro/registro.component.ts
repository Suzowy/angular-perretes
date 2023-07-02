import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  email: string;
  password: string;
  confirmPassword: string;
  userName: string;
  userLastname: string;
  registrado: boolean;
  errorPasswords: boolean;
  pivoteName: string;

  constructor() {
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.userName = '';
    this.userLastname = '';
    this.registrado = false;
    this.errorPasswords = false;
    this.pivoteName = '';
  }

  register() {
    console.log(this.userName);
    console.log(this.userLastname);
    console.log(this.email);
    console.log(this.password);
    console.log(this.confirmPassword);

    if (this.password === this.confirmPassword) {
      this.registrado = true;
      this.pivoteName = this.userName;
    } else {
      console.log('La contraseña no coincide');
      this.errorPasswords = true;
    }

    this.userName = '';
    this.userLastname = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }
}
