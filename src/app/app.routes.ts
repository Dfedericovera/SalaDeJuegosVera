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
    { path: 'Home', component: HomeComponent },
    { path: 'QuienSoy', component: QuienSoyComponent },
    { path: 'Login', component: LoginComponent },  
    
    { 
        path: 'Home', 
        component: LoginComponent,
        children:[
            {
                path: "ahorcado",
                component: AhorcadoComponent
            },
            {
                path: "mayorOMenor",
                component: MayorOMenorComponent
            },
                        {
                path: "preguntados",
                component: PreguntadosComponent
            },
                        {
                path: "caraOSeca",
                component: CaraOSecaComponent
            }
        ]

    },    
    

    //Algo asi debe ser para los juegos (falta lazyload)
    //{
    //     path: 'products', component: ProductsComponent,
    //     children:
    //         [
    //             {
    //                 path: "detalle/:productId",
    //                 component: ProductDetailComponent
    //             }
    //         ]
    // },

    // {
    //     path: 'about',
    //     loadChildren: () => import('./modules/general/about/about.module')
    //       .then(mod => mod.AboutModule)
    //   },

    // { path: '**', component: PageNotFoundComponent },    
    { path: '**', component: HomeComponent },
];
