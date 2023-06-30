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



  registrar() {
    console.log('Nombre:', this.nombre);
    console.log('Email:', this.email);
    console.log('Teléfono:', this.telefono);
    console.log('Le gustan los perros:', this.leGustanLosPerros);
    console.log('Mensaje:', this.mensaje);
  }



  limpiar() {
    this.nombre = '';
    this.email = '';
    this.telefono = '';
    this.leGustanLosPerros = false;
    this.mensaje = '';

  }
}
