import { Controller, HttpStatus } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { IProfileByIdResponse } from "../interfaces/profile/profile-by-id-response.interface";
import { IProfile } from "../interfaces/profile/profile.interface";
import { IProfilesResponse } from "../interfaces/profile/profiles-response.interface";

import { ProfileService } from "../services/profile.service";

@Controller('profile')
export class ProfileController {
  constructor(
    private readonly service: ProfileService,
  ) {}
  
  @MessagePattern('get_all_profiles') 
  public async getAllProfiles(): Promise<IProfilesResponse> {
    const profiles = await this.service.searchProfile();

    return {
      status: HttpStatus.OK,
      message: 'get_all_profiles_success',
      profiles
    }
  }

  @MessagePattern('profile_create')
  public async createProfile(data: IProfile): Promise<IProfileByIdResponse> {
    const profile = await this.service.createProfile(data);

    return {
      status: HttpStatus.OK,
      message: 'create_profile_success',
      profile
    }
  }

  @MessagePattern('get_profile_by_id') 
  public async getProfileById(data: {
    id: string;
  }): Promise<IProfileByIdResponse> {
    const profile = await this.service.searchProfileById(data.id);

    if(!profile) {
      return {
        status: HttpStatus.NOT_FOUND,
        message: 'get_profile_by_id_not_found',
        profile: null
      }
    };

    return {
      status: HttpStatus.OK,
      message: 'get_all_profiles_success',
      profile
    }
  }

  @MessagePattern('get_profile_by_userid') 
  public async getProfileByUserId(data: {
    userId: string;
  }): Promise<IProfileByIdResponse> {
    const profile = await this.service.searchProfile({ userId: data.userId });

    if(!profile || profile.length === 0) {
      return {
        status: HttpStatus.NOT_FOUND,
        message: 'get_profile_by_userid_not_found',
        profile: null
      }
    };

    return {
      status: HttpStatus.OK,
      message: 'get_all_profiles_success',
      profile: profile[0]
    }
  }
}