import { ResponseDto } from "common/interface/dto/response.dto";

import { IProfile } from "../../profile.interface";

export interface GetAllProfilesResponseDto extends ResponseDto {
  data: {
    profiles: IProfile[];
  };
}