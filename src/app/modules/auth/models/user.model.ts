import { Roles } from "./roles.model";

export interface User {
  uid: string;
  roles: Roles;
}
