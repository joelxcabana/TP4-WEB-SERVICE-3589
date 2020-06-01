import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DivisasComponent } from './components/divisas/divisas.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';
import { CovidComponent } from './components/covid/covid.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { NgxDataTableModule} from "angular-9-datatable";
import { ProductosComponent } from './components/productos/productos.component'; 

@NgModule({
  declarations: [
    AppComponent,
    DivisasComponent,
    NoticiasComponent,
    HoroscopoComponent,
    CovidComponent,
    HeaderComponent,
    FooterComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxDataTableModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
