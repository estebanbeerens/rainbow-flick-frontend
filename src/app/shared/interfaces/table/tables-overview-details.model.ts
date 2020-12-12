import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';

export interface ITableOverviewDetails {
  id: String;
  name: String;
  location: String;
  imageUrl: String;
  contactName: String;
  contactPhone: String;
  description: String;
  inUse: Boolean;
  match: IMatchDetail;
}
