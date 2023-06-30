import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistroComponent } from './registro/registro.component';
import { ErrorPaginaComponent } from './errorPagina/errorPagina.component';
import { WelcomeComponent } from './welcome/welcome.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: '**', component: ErrorPaginaComponent},
  {path: 'about', component: AboutComponent},
  { path: 'welcome/:username', component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
