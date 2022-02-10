import { Controller, Get, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

import { GetAllUsersResponseDto } from "interfaces/user/dto/response/get-all-user-reponse.dto";
import { Role } from "../common/enums/role.enum";
import { Auth } from "../common/decorators/auth.decorator";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("users")
@Controller("users")
export class UsersController {
  constructor(
    @Inject("USER_SERVICE") private readonly userService: ClientProxy
  ) {}

  @Get()
  @Auth(Role.Admin)
  async getAllUsers(): Promise<GetAllUsersResponseDto> {
    const response = await this.userService
      .send("get_all_users", {})
      .toPromise();

    return {
      message: response.message,
      data: {
        users: response.users,
      },
      errors: null,
    };
  }
}
