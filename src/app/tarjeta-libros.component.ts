import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-libros',
  templateUrl: './tarjeta-libros.component.html',
  styleUrls: ['./tarjeta-libros.component.css']
})
export class TarjetaLibrosComponent {

  @Input() listadoLibros: Libro[] = []
  @Input() listadoLibrosAlquilados: IAlquiler[] = []

  public incrementar(libro: Libro){
    libro.anioPublicacion++;
  }

  opacidadActual: number = 1;

  actualizarOpacidad(opacidad: number) {
    this.opacidadActual = opacidad;
  }

  showDiv: boolean = true;
}

class Libro {
  nombre: string;
  descripcion: string;
  categoria: string;
  anioPublicacion: number;
  autor: string;
  imagen: string;
  link: string;

  constructor(nombre: string, categoria: string, anioPublicacion: number, autor: string, descripcion: string, imagen: string, link: string) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.anioPublicacion = anioPublicacion;
    this.autor = autor;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.link = link;
  }
}

interface IAlquiler{
  libro: Libro;
  costo: number;
  fecha: Date;
  usuario: string;
}
