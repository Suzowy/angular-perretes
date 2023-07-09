import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  isUserRegistered: boolean = false;

  constructor(private registrationService: FakeRegistrationService, private router: Router) {
    this.username = '';
    this.password = '';

    const registeredUsers = this.registrationService.getRegisteredUsers();
    const user = registeredUsers.find((registeredUser: any) => registeredUser.email === this.username);

    this.isUserRegistered = !!user; // Verifica si el usuario existe en la lista de usuarios registrados
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

    } else {
      console.log('Inicio de sesión fallido. Usuario no registrado o incorrecto');
      this.loginError = true;
    }
    this.limpiar();
  }

  limpiar() {
    this.username = '';
    this.password = '';
    this
  }

  redirectToRegistration() {
    this.router.navigateByUrl('/registro');
  }
}
