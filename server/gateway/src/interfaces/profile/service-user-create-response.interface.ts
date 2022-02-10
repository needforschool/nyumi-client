import { IProfile } from "./profile.interface";

export interface IServiceProfileCreateResponse {
  status: number;
  message: string;
  profile: IProfile | null;
  errors: { [key: string]: any };
}
