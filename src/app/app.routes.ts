import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { LoginComponent } from './componentes/login/login.component';

export const routes: Routes = [
    { path: 'Home', component: HomeComponent },
    { path: 'QuienSoy', component: QuienSoyComponent },
    { path: 'Login', component: LoginComponent },
];
