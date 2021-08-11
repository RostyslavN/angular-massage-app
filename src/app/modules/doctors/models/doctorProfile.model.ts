import { Person } from '../../shared/models/person.model';

export interface DoctorProfile extends Person {
  education: string;
  experience: number;
}
