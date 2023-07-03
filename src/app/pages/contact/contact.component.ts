import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  nombre: string = '';
  email: string = '';
  telefono: string = '';
  leGustanLosPerros: boolean = false;
  mensaje: string = '';

  mensajeEnviado: boolean = false;
  errorFormulario: boolean = false;

  registrar() {
    console.log('Nombre:', this.nombre);
    console.log('Email:', this.email);
    console.log('Teléfono:', this.telefono);
    console.log('Le gustan los perros:', this.leGustanLosPerros);
    console.log('Mensaje:', this.mensaje);

    if (this.nombre.trim() === '' || this.email.trim() === '' || this.telefono.trim() === '' || this.mensaje.trim() === '') {
      this.errorFormulario = true;
      console.log('Faltan campos por completar');
    } else {
      this.mensajeEnviado = true;
      this.errorFormulario = false;
      this.limpiar();
    }
  }

  limpiar() {
    this.nombre = '';
    this.email = '';
    this.telefono = '';
    this.leGustanLosPerros = false;
    this.mensaje = '';
  }
}
