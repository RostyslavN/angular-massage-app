export class Booking {
  name: string;
  customerId?: string;
  doctorId?: string;
  time: Date | number;
  // time: any;
  description?: string;

  constructor(booking: Partial<Booking> = {}) {
    this.name = booking.name || '';
    this.customerId = booking.customerId || undefined;
    this.doctorId = booking.doctorId || undefined;
    this.time = booking.time || new Date().getTime();
    this.description = booking.description || '';
  }
}
