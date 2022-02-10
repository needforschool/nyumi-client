import { IProfile } from "./profile.interface";

export interface IProfileByIdResponse {
  status: number;
  message: string;
  profile: IProfile | null;
}
