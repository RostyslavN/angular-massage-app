import { Person } from '../../shared/models/person.model';

export interface Doctor extends Person {
  experience: {months: number; specilisation: string};
  skills: string[];
  hospitalId: string;
  isEmployee: boolean;
  // availableTime: Date[];
}
