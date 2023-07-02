import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;
  loggedInUser: string;

  constructor() {
    this.username = '';
    this.password = '';
    this.loggedInUser = '';
  }

  login() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    // Aquí puedes realizar la lógica de autenticación
    // y asignar el nombre de usuario a la propiedad loggedInUser después de iniciar sesión.
    // Por ahora, simplemente asignaremos el nombre de usuario ingresado.
    this.loggedInUser = this.username;
  }
}
