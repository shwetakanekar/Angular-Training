import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace',
})
export class ReplacePipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    const [charToReplace, replaceWith] = args;
    const regEx = new RegExp(charToReplace, 'g');
    return value.replace(regEx, replaceWith);
  }
}
