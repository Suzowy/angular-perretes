import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ErrorPaginaComponent } from './errorPagina/errorPagina.component';
import { AboutComponent } from './pages/about/about.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CharactersComponent } from './pages/characters/characters.component';

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
