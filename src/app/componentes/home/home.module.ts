import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AhorcadoComponent } from '../ahorcado/ahorcado.component';
import { CaraOSecaComponent } from '../cara-oseca/cara-oseca.component';
import { MayorOMenorComponent } from '../mayor-omenor/mayor-omenor.component';
import { PreguntadosComponent } from '../preguntados/preguntados.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Ahorcado', component: AhorcadoComponent },
  { path: 'MayorOMenor', component: MayorOMenorComponent },
  { path: 'Preguntados', component: PreguntadosComponent },
  { path: 'Caraoseca', component: CaraOSecaComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HomeComponent
  ],
  exports: [RouterModule]
})
export class HomeModule { }
