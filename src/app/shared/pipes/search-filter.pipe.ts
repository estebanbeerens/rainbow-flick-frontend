import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { IUserDetails } from 'src/app/shared/interfaces/user/user-details.model';
@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  fe: String;
  transform(activities: Observable<any[]>, term?: any): any {
    if (term === undefined) return activities;
    return activities.pipe(
      map((items) => items.filter((item) => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1))
    );
  }

  transformUser(activities: Observable<IUserDetails[]>, term?: any): any {
    if (term === undefined) return activities;

    return activities.pipe(
      map((items) =>
        items.filter((item) => {
          this.fe = item.firstName + ' ' + item.lastName;
          return this.fe.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
      )
    );
  }
}
