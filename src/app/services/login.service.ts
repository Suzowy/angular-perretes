import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(username: string, password: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      // Lógica de autenticación
      if (username === 'admin' && password === 'password') {
        resolve(true); // Autenticación exitosa
      } else {
        resolve(false); // Autenticación fallida
      }
    });
  }
}
