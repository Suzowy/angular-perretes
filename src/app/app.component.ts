import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Perretes';
  showLoginForm: boolean = false;
  toggleLoginForm() {
    this.showLoginForm = !this.showLoginForm;
  }
}
