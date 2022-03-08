import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstuppercase'
})
export class FirstuppercasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let firstLetter = value.charAt(0);
    firstLetter = firstLetter.toUpperCase();
    const string = value.replace(value.charAt(0), firstLetter);
    return string;
  }

}
