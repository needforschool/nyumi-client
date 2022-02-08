import { ResponseDto } from "common/interface/dto/response.dto";
import { IProfile } from "interfaces/profile/profile.interface";

import { IUser } from '../../user.interface';

export interface CreateUserResponseDto extends ResponseDto {
  data: {
    user: IUser;
    profile: IProfile;
    token: string;
  };
}
