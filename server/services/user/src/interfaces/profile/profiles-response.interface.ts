import { IProfile } from "./profile.interface";

export interface IProfilesResponse {
  status: number;
  message: string;
  profiles: IProfile[];
}