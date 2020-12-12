export interface ITableDetails {
  id: String;
  name: String;
  location: String;
  imageUrl: String;
  contactName: String;
  contactPhone: String;
  description: String;
  inUse: Boolean;
}

export const ITableDetailsInitialValue: ITableDetails = {
  id: '',
  name: '',
  location: '',
  imageUrl: '',
  contactName: '',
  contactPhone: '',
  description: '',
  inUse: false
}
