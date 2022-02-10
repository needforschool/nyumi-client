/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Inject,
  Post,
} from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiPreconditionFailedResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from "@nestjs/swagger";

import { IUser } from "../interfaces/user/user.interface";
import { CreateUserDto } from "../interfaces/user/dto/create-user.dto";
import { LoginUserDto } from "../interfaces/user/dto/login-user.dto";
import { CreateUserResponseDto } from "../interfaces/user/dto/response/create-user-response.dto";
import { LoginUserResponseDto } from "../interfaces/user/dto/response/login-user-response.dto";
import { IServiceUserCreateResponse } from "../interfaces/user/service-user-create-response.interface";
import { IServiceUserSearchResponse } from "../interfaces/user/service-user-search-response.interface";
import { IServiveUserTokenCreateResponse } from "../interfaces/user/service-user-token-create-response.interface";
import { IServiceProfileCreateResponse } from "interfaces/profile/service-user-create-response.interface";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(
    @Inject("USER_SERVICE") private readonly userService: ClientProxy
  ) {}

  @ApiCreatedResponse({
    description: "User created successfully.",
    type: IUser,
  })
  @ApiConflictResponse({ description: "User already exists." })
  @ApiPreconditionFailedResponse({ description: "User creation error." })
  @ApiBadRequestResponse({ description: "Missing payload." })
  @Post("register")
  async registerUser(
    @Body() request: CreateUserDto
  ): Promise<CreateUserResponseDto> {
    const createUserResponse: IServiceUserCreateResponse =
      await this.userService.send("user_create", request).toPromise();
    if (
      createUserResponse.status !== HttpStatus.CREATED &&
      !createUserResponse.user
    ) {
      throw new HttpException(
        {
          message: createUserResponse.message,
          data: null,
          errors: createUserResponse.errors,
        },
        createUserResponse.status
      );
    }

    const createTokenResponse: IServiveUserTokenCreateResponse =
      await this.userService
        .send("token_create", {
          userId: createUserResponse.user?.id,
        })
        .toPromise();

    const createProfileResponse: IServiceProfileCreateResponse =
      await this.userService
        .send("profile_create", {
          user_id: createUserResponse.user?.id,
          first_name: request.firstName,
        })
        .toPromise();
    if (
      createProfileResponse.status !== HttpStatus.CREATED &&
      !createProfileResponse.profile
    ) {
      throw new HttpException(
        {
          message: createProfileResponse.message,
          data: null,
          errors: createProfileResponse.errors,
        },
        createProfileResponse.status
      );
    }

    return {
      message: createUserResponse.message,
      data: {
        user: createUserResponse.user!,
        profile: createProfileResponse.profile!,
        token: createTokenResponse.token!,
      },
      errors: null,
    };
  }

  @ApiOkResponse({ description: "User logged in successfully." })
  @ApiUnauthorizedResponse({ description: "User not logged in." })
  @Post("login")
  async loginUser(
    @Body() request: LoginUserDto
  ): Promise<LoginUserResponseDto> {
    const getUserResponse: IServiceUserSearchResponse = await this.userService
      .send("user_search_by_credentials", request)
      .toPromise();

    if (getUserResponse.status !== HttpStatus.OK && !getUserResponse.user) {
      throw new HttpException(
        {
          message: getUserResponse.message,
          data: null,
          errors: null,
        },
        HttpStatus.UNAUTHORIZED
      );
    }

    const createTokenResponse: IServiveUserTokenCreateResponse =
      await this.userService
        .send("token_create", {
          userId: getUserResponse.user?.id,
        })
        .toPromise();

    return {
      message: createTokenResponse.message,
      data: {
        user: getUserResponse.user!,
        token: createTokenResponse.token!,
      },
      errors: null,
    };
  }
}
