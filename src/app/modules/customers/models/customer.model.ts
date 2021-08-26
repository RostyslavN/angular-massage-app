import { Person } from '../../shared/models/person.model';

export interface Customer extends Person {
  id?: string;
  doctorId: string;
  illnessHistory: string;
  diagnosis: string;
  // availableTime: Date[];
  illnessId: string;
  isClient: boolean;
}
