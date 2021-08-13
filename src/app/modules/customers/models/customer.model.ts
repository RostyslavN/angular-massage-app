import { User } from "../../auth/models/user.model";
import { Person } from "../../shared/models/person.model";

export interface Customer extends Person, User {
  illness: string;
  isClient: boolean;
  availableTime: Date[];
}
