import { ResponseDto } from "common/interface/dto/response.dto";

import { IUser } from "../../user.interface";

export interface GetAllUsersResponseDto extends ResponseDto {
  data: {
    users: IUser[];
  };
}
