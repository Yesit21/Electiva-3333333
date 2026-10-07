import { Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro';
import { LoginComponent } from './components/login/login';
import { DashboardComponent } from './components/dashboard/dashboard';
import { AnalisisComponent } from './components/analisis/analisis';
import { CultivosComponent } from './components/cultivos/cultivos';
import { BibliotecaComponent } from './components/biblioteca/biblioteca';
import { PerfilComponent } from './components/perfil/perfil';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'analisis', component: AnalisisComponent },
  { path: 'cultivos', component: CultivosComponent },
  { path: 'biblioteca', component: BibliotecaComponent },
  { path: 'perfil', component: PerfilComponent }
];
