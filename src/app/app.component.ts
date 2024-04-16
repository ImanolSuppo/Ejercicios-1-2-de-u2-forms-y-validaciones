import { Component } from '@angular/core';

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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  primerLibro = new Libro("El Principito", "Ficción", 1943, "Antoine de Saint-Exupéry", "La historia se centra en un pequeño príncipe que realiza una travesía por el universo.", "https://cdn.culturagenial.com/es/imagenes/libro-el-principito-og.jpg", "https://www.librum.com.ar/productos/el-principito/");
  segundoLibro = new Libro("Don Quijote de la Mancha", "Ficción", 1605, "Miguel de Cervantes", "Las aventuras y desventuras de un hidalgo de 50 años llamado Alonso Quijano", "https://img2.rtve.es/i/?w=1200&i=https://img2.rtve.es/imagenes/fotograma-don-quijote-mancha-popular-serie-cruz-delgado-para-television-espanola/1434466887284.jpg", "https://www.eudeba.com.ar/Papel/9789502313849/El+ingenioso+hidalgo+don+Quijote+de+la+Mancha");
  tercerLibro = new Libro("Pinocho", "Fantasia", 1883, "Carlo Collodi", "Cuando Geppetto ve una estrella fugaz, desea que su títere, pueda convertirse en un niño de verdad", "https://i.ytimg.com/vi/mW92gIr6FaI/maxresdefault.jpg", "https://www.betygino.com.ar/productos/las-aventuras-de-pinocho/")
  libros: Libro[] = [this.primerLibro, this.segundoLibro, this.tercerLibro]
  primerAlquiler: IAlquiler = {
    libro: this.primerLibro,
    costo: 100,
    fecha: new Date,
    usuario: "Imanol"
  }
  librosAlquilados: IAlquiler[] = [this.primerAlquiler];
  title = 'biblioteca_nacional';

  public onAgregarLibros(event: Libro){
    this.libros.push(event);
  }
  public onAgregarLibrosAlquilados(event: IAlquiler){
    this.librosAlquilados.push(event);
  }
}
