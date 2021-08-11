import { Person } from "../../shared/models/person";

export interface DoctorProfile extends Person {
  education: String;
  experience: Number;
}
