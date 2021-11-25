import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrarInmuebleComponent } from './registrar-inmueble/registrar-inmueble.component';

const routes: Routes = [

  {path:'home',component: HomeComponent},
  {path:'registrar',component:RegistrarInmuebleComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
