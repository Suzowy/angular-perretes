import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ErrorPaginaComponent } from './errorPagina/errorPagina.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactComponent } from './contact/contact.component';
import { CharactersComponent } from './characters/characters.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'about', component: AboutComponent },
  { path: 'welcome/:username', component: WelcomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'characters', component: CharactersComponent },
  { path: '**', component: ErrorPaginaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
