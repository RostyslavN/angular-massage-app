import { Person } from '../../shared/models/person.model';

export interface Doctor extends Person {
  education: string;
  experience: number;
  isEmployee: boolean;
  availableTime: Date[];
}
