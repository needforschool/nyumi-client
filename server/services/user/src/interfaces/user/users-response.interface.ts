import { IUser } from "./user.interface";

export interface IUsersResponse {
  status: number;
  message: string;
  users: IUser[];
}