import { Person } from '../../shared/models/person.model';

export interface CustomerProfile extends Person {
  illness: string;
}
