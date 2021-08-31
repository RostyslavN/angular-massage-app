import { Person } from '../../shared/models/person.model';

export class Customer implements Person {
  id?: string;
  fullName: string;
  age: number;
  doctorId: string;
  illnessHistory: string;
  diagnosis: string;
  phoneNumber: string;
  isClient: boolean;

  constructor({
    fullName = '',
    age,
    doctorId = undefined,
    illnessHistory = '',
    diagnosis = '',
    phoneNumber = '',
    isClient = true
  }: Partial<Customer> = {}) {
    Object.assign(this, {
      fullName, age, doctorId, illnessHistory, diagnosis, phoneNumber, isClient
    });
  }
}
