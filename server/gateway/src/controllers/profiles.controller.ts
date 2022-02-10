import { Controller, Get, Inject, Param } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { ApiTags } from "@nestjs/swagger";
import { GetAllProfilesResponseDto } from "interfaces/profile/dto/response/get-all-profiles-reponse.dto";
import { GetProfileByIdReponseDto } from "interfaces/profile/dto/response/get-profile-by-id-response.dto";

import { Auth } from "../common/decorators/auth.decorator";
import { Role } from "../common/enums/role.enum";

@ApiTags("profiles")
@Controller("profiles")
export class ProfilesController {
  constructor(@Inject("USER_SERVICE") private readonly service: ClientProxy) {}

  @Get()
  @Auth(Role.Admin)
  async getAllProfiles(): Promise<GetAllProfilesResponseDto> {
    const response = await this.service
      .send("get_all_profiles", {})
      .toPromise();

    return {
      message: response.message,
      data: {
        profiles: response.profiles,
      },
      errors: null,
    };
  }

  @Get(":id")
  async getProfileById(
    @Param("id") id: string
  ): Promise<GetProfileByIdReponseDto> {
    const response = await this.service
      .send("get_profile_by_id", { id })
      .toPromise();

    return {
      message: response.message,
      data: {
        profile: response.profile,
      },
      errors: null,
    };
  }

  @Get("user/:userId")
  async getProfileByUserId(
    @Param("userId") userId: string
  ): Promise<GetProfileByIdReponseDto> {
    const response = await this.service
      .send("get_profile_by_userid", { userId })
      .toPromise();

    return {
      message: response.message,
      data: {
        profile: response.profile,
      },
      errors: null,
    };
  }
}
