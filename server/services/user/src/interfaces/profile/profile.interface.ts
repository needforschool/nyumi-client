import { Document } from "mongoose";

export interface IProfile extends Document {
  user_id: string;
  first_name: string;
  last_name?: string;
}
