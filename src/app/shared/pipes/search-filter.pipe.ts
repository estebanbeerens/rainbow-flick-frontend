import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(activities: Observable<any[]>, term?: any): any {
    if (term === undefined) return activities;
    return activities.pipe(map((items) => items.filter((item) => item.name.toLowerCase().indexOf(term) > -1)));
  }
}
