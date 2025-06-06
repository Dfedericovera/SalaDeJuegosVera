import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
       { path: '', component: HomeComponent },
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
