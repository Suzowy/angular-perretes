// NavbarComponent
import { Component } from '@angular/core';
import { FakeRegistrationService } from '../services/fake-registration.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public registrationService: FakeRegistrationService) {}
}
