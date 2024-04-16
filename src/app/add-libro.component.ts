import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';


interface ILibro{ //Esta interface solo la voy a usar para limpiar los campos
  nombre: string;
  descripcion: string;
  categoria: string;
  anioPublicacion: number;
  autor: string;
  imagen: string;
  link: string;
  usuario: string;
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

@Component({
  selector: 'app-add-libro',
  templateUrl: './add-libro.component.html',
  styleUrls: ['./add-libro.component.css']
})
export class AddLibroComponent {
  @Output() nuevoLibro: EventEmitter<Libro> = new EventEmitter();

  limpiarLibro: ILibro = {
    nombre: "",
    descripcion: "",
    categoria: "",
    anioPublicacion: 0,
    autor: "",
    imagen: "",
    link: "",
    usuario: ""
  }

  public validate(formulario: NgForm){
    if(formulario.value.nombre == "" ||
    formulario.value.autor == "" ||
    formulario.value.descripcion == "" ||
    formulario.value.imagen == "" ||
    formulario.value.link == "" ||
    formulario.value.anioPublicacion == "0"){
      alert("Debe completar todos los campos")
    }
    else if(formulario.value.nombre.length > 250){
      alert("El nombre no puede pasar los 250 caracteres")
    }
    else if(formulario.value.autor.length > 300) {
      alert("El autor no puede pasar los 300 caracteres")
    }
    else if(formulario.value.usuario.length > 300) {
      alert("El usuario no puede pasar los 300 caracteres")
    }
    else if(formulario.value.anioPublicacion.length < -3000
    || formulario.value.anioPublicacion.length > 2024){
      alert("El año de publicación debe ser un año valido")
    }
    else{
      let libro: Libro = new Libro(
        formulario.value.nombre,
        formulario.value.categoria,
        formulario.value.anioPublicacion,
        formulario.value.autor,
        formulario.value.descripcion,
        formulario.value.imagen,
        formulario.value.link
      )
      this.nuevoLibro.emit(libro);
      alert("Se guardo el libro con exito!")
      this.limpiar(formulario)
    }
  }
  public limpiar(formulario: NgForm){
    //Limpiar los campos
    this.limpiarLibro.nombre = "";
    this.limpiarLibro.descripcion = "";
    this.limpiarLibro.autor = "";
    this.limpiarLibro.anioPublicacion = 0;
    this.limpiarLibro.imagen = "";
    this.limpiarLibro.link = "";
    this.limpiarLibro.usuario = "";
  }

}
