import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ruta-imagen',
  templateUrl: './ruta-imagen.component.html',
  styleUrls: ['./ruta-imagen.component.css']
})
export class RutaImagenComponent {
  @Input() imagen: string = "";
}
