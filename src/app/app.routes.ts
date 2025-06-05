import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { LoginComponent } from './componentes/login/login.component';
import { AhorcadoComponent } from './componentes/ahorcado/ahorcado.component';
import { MayorOMenorComponent } from './componentes/mayor-omenor/mayor-omenor.component';
import { PreguntadosComponent } from './componentes/preguntados/preguntados.component';
import { CaraOSecaComponent } from './componentes/cara-oseca/cara-oseca.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', 
        loadChildren: () => import('./componentes/home/home.module').then(mod => mod.HomeModule),
        canActivate: [AuthGuard] 
     },
    { path: 'QuienSoy', component: QuienSoyComponent },
    { path: 'Registro', component: RegistroComponent },
    { path: 'Login', component: LoginComponent },      
    { 
        path: 'Home', 
        loadChildren: () => import('./componentes/home/home.module').then(mod => mod.HomeModule),
        canActivate: [AuthGuard] 
    },  
    { path: 'Ahorcado', component: AhorcadoComponent },      
    { path: 'MayorOMenor', component: MayorOMenorComponent },      
    { path: 'Preguntados', component: PreguntadosComponent },      
    { path: 'Caraoseca', component: CaraOSecaComponent },      
    // { path: '**', component: HomeComponent },


];
