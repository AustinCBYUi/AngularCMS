export interface Client {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  business: string;
  phoneNumber: string;
  createdDate: string;
  lastServiced?: string;
  accountNotes?: string;
}
