import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inrToUsd',
})
export class InrToUsdPipe implements PipeTransform {
  transform(value: number, ...args: number[]): number {
    const [usd] = args;
    return value * usd;
  }
}
