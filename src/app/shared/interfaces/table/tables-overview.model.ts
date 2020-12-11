import { Observable } from 'rxjs';
import { ITableOverviewDetails } from 'src/app/shared/interfaces/table/tables-overview-details.model';

export interface ITableOverview {
  date: Date;
  tables: ITableOverviewDetails[];
}
