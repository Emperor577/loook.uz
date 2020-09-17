import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number): unknown {
    let pos = 0;
    if (value / 1000 < 10) {
      pos = 1;
    }
    if (value / 1000 >= 10 && value / 1000 < 100) {
      pos = 2;
    }
    if (value / 1000 >= 100 && value / 1000 < 1000) {
      pos = 3;
    }
    return  value.toString().slice(0, pos) + ' ' + value.toString().slice(pos);
  }

}
