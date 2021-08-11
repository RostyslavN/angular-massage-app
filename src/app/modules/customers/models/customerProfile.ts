import { Person } from "../../shared/models/person";

export interface CustomerProfile extends Person {
  illness: String;
}
