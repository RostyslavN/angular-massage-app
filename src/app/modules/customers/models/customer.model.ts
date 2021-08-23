import { Person } from '../../shared/models/person.model';

export interface Customer extends Person {
  doctorId: string;
  illnessHistory: string;
  diagnosis: string;
  // availableTime: Date[];
  illnessId: string;
  isClient: boolean;
}
