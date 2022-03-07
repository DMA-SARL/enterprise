import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'array'
})
export class ArrayPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number [] {
    const array: number[] = [];
    for (let i = 1; i <= value; i++) {
      array.push(i);
    }
    console.log(array);
    return array;
  }

}
