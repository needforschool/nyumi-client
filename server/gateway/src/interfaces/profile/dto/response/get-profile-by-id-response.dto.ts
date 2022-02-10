import { ResponseDto } from "common/interface/dto/response.dto";

import { IProfile } from "../../profile.interface";

export interface GetProfileByIdReponseDto extends ResponseDto {
  data: {
    profile: IProfile;
  };
}
