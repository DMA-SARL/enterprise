import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slug'
})
export class SlugPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    const from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;"
    const to = "aaaaaeeeeeiiiiooooouuuunc------"

    const newText = value.split('').map(
      (letter, i) => letter.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i)));

    return newText
      .toString()                     // Cast to string
      .toLowerCase()                  // Convert the string to lowercase letters
      .trim()                         // Remove whitespace from both sides of a string
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/&/g, '-y-')           // Replace & with 'and'
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-');        // Replace multiple - with single -
  }
}
