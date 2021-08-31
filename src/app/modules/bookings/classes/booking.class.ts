export class Booking {
  id?: string;
  name: string;
  customerId?: string;
  doctorId?: string;
  time: Date | number;
  description?: string;

  constructor({
    name = '',
    customerId = undefined,
    doctorId = undefined,
    time = new Date(),
    description = ''
  }: Partial<Booking> = {}) {
    Object.assign(this, { name, customerId, doctorId, time, description });
  }
}
