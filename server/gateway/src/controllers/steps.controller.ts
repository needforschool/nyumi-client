import { Controller, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("steps")
@Controller("steps")
export class StepsController {
  constructor(
    @Inject("USER_SERVICE") private readonly userService: ClientProxy
  ) {}
}
