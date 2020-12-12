import { ITableDetails } from 'src/app/shared/interfaces/table/table-details.model';

export interface IChanllenge {
  homeTeam: string;
  awayTeam: string;
  dateTimePlanned: Date;
  table: ITableDetails;
}
