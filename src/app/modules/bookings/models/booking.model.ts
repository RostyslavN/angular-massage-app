export interface Booking {
  name: string;
  customer: string;
  doctor: string;
  // time: Date | number;
  time: any;
  description?: string;
}
