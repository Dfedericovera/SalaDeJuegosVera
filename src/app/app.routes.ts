import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { LoginComponent } from './componentes/login/login.component';
import { AhorcadoComponent } from './componentes/ahorcado/ahorcado.component';
import { MayorOMenorComponent } from './componentes/mayor-omenor/mayor-omenor.component';
import { PreguntadosComponent } from './componentes/preguntados/preguntados.component';
import { CaraOSecaComponent } from './componentes/cara-oseca/cara-oseca.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: "full" },
    { path: 'QuienSoy', component: QuienSoyComponent },
    { path: 'Login', component: LoginComponent },      
    { 
        path: 'Home', 
        loadChildren: () => import('./componentes/home/home.module').then(mod => mod.HomeModule)
    },  
    { path: 'Ahorcado', component: AhorcadoComponent },      
    { path: '**', component: HomeComponent },


];
