import { Role } from "common/enums/role.enum";

export interface IUser {
  id: string;
  email: string;
  role: Role;
}