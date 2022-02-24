import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'awt'
})
export class AwtPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    // console.log(value);
    return value;
  }

}
