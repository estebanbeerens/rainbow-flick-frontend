import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeDatePipe',
})
export class TimeDatePipe implements PipeTransform {
  constructor() {}
  transform(date: Date): string {
    const newDate = new Date(date);
    newDate.setHours(newDate.getHours() - 1);
    const hours = newDate.getHours().toString();
    const min = ('0' + newDate.getMinutes()).slice(-2);
    return hours + ':' + min;
  }
}
