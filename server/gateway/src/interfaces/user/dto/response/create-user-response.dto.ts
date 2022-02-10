import { ResponseDto } from "common/interface/dto/response.dto";
import { IProfile } from "interfaces/profile/profile.interface";

import { IUser } from "../../user.interface";

export type CreateUserResponseDto = ResponseDto & {
  data: {
    user: IUser;
    profile: IProfile;
    token: string;
  };
};
