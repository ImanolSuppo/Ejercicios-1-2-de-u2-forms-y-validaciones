import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ContenedorBibliotecaComponent } from './contenedor-biblioteca.component';
import { OpacidadComponent } from './opacidad.component';
import { RutaImagenComponent } from './ruta-imagen.component';
import { TarjetaLibrosComponent } from './tarjeta-libros.component';
import { FormsModule } from '@angular/forms';
import { AntiquityPipe } from './antiquity.pipe';
import { AddLibroComponent } from './add-libro.component';
import { RentLibroComponent } from './rent-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenedorBibliotecaComponent,
    OpacidadComponent,
    RutaImagenComponent,
    TarjetaLibrosComponent,
    AntiquityPipe,
    AddLibroComponent,
    RentLibroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
