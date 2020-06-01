import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidComponent } from './components/covid/covid.component';
import { DivisasComponent } from './components/divisas/divisas.component';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ProductosComponent } from './components/productos/productos.component';


const routes: Routes = [
  { path: 'covid',component: CovidComponent },
  { path: 'divisa',component: DivisasComponent },
  { path: 'horoscopo',component: HoroscopoComponent },
  { path: 'noticias',component: NoticiasComponent },
  { path: 'producto',component: ProductosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
