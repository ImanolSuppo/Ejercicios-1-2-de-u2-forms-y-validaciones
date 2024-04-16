import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-opacidad',
  templateUrl: './opacidad.component.html',
  styleUrls: ['./opacidad.component.css']
})
export class OpacidadComponent {
  @Output() opacidadCambiada = new EventEmitter<number>();

  cambiarOpacidad(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target) {
      const opacidad = parseFloat(target.value);
      if (!isNaN(opacidad)) {
        this.opacidadCambiada.emit(opacidad);
      }
    }
  }
}
