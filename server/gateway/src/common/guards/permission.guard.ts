import { CanActivate, ExecutionContext, Inject, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ClientProxy } from "@nestjs/microservices";
import { Role } from "common/enums/role.enum";

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    @Inject('USER_SERVICE') private readonly userService: ClientProxy,
  ) {}
  
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const secured = this.reflector.get<string[]>(
      'secured',
      context.getHandler(),
    );

    if (!secured) {
      return true;
    }

    const permission = this.reflector.get<Role[]>(
      'permission',
      context.getHandler(),
    );

    const request = context.switchToHttp().getRequest();
    const userToken = await this.userService
      .send('token_decode', {
        token: request.headers.authorization,
      })
      .toPromise();

    const userData = await this.userService
      .send('user_get_by_id', userToken.data.userId)
      .toPromise();

    return permission === userData.user.role;
  }
}