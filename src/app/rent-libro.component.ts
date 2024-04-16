import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  selector: 'app-rent-libro',
  templateUrl: './rent-libro.component.html',
  styleUrls: ['./rent-libro.component.css']
})
export class RentLibroComponent {

  @Input() listadoLibros: Libro[] = [];
  @Output() librosAlquilados: EventEmitter<IAlquiler> = new EventEmitter;

  alquiler: IAlquiler = {
    libro: this.listadoLibros[1],
    costo: 0,
    fecha: new Date,
    usuario: ""
  }


  public onAlquilar(formulario: NgForm){
    if(this.isValid(formulario)){
      let indice: number =  this.listadoLibros.findIndex((x) => x.nombre == formulario.value.libro);
      this.alquiler.libro = this.listadoLibros[indice];
      this.librosAlquilados.emit(this.alquiler);
    }
  }

  isValid(formulario: NgForm): boolean {
    if(formulario.value.libro === undefined){
      alert("Debe seleccionar un libro");
      return false;
    }
    if(formulario.value.costo <= 0){
      alert("El precio debe ser mayor a 0");
      return false;
    }
    if(formulario.value.fecha < new Date){
      alert("No puede poner fechas pasadas");
      return false;
    }
    alert("Se cargo con exito!")
    return true
  }
  

}
