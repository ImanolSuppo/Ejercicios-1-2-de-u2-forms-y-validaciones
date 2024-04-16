import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'antiquity'
})
export class AntiquityPipe implements PipeTransform {
  transform(year: number): string {
    const currentYear = new Date().getFullYear();
    const yearsAgo = currentYear - year;

    if (yearsAgo === 0) {
      return 'Este año';
    } else if (yearsAgo === 1) {
      return 'Hace 1 año';
    } else {
      return `Hace ${yearsAgo} años`;
    }
  }
}
