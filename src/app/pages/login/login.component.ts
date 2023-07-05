import { Component } from '@angular/core';
import { FakeRegistrationService } from '../../services/fake-registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;
  loggedInUser: string = '';
  loginError: boolean = false;

  constructor(private registrationService: FakeRegistrationService) {
    this.username = '';
    this.password = '';
    this.loggedInUser = '';
    this.loginError = false;
  }

  login() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    const registeredUsers = this.registrationService.getRegisteredUsers();
    const user = registeredUsers.find((registeredUser: any) => registeredUser.email === this.username && registeredUser.password === this.password);

    if (user) {
      console.log('Inicio de sesión exitoso');
      this.loggedInUser = user.name; // nombre del usuario registrado
      this.loginError = false;
      this.limpiar();
    } else {
      console.log('Inicio de sesión fallido. Usuario no registrado o  incorrecto');
      this.loginError = true;
    }

  }

  limpiar() {
    this.username = '';
    this.password = '';
  }
}
