import { Person } from '../../shared/models/person.model';

export interface Customer extends Person {
  illness: string;
  isClient: boolean;
  availableTime: Date[];
}
