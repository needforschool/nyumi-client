import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { ClientProxyFactory } from "@nestjs/microservices";

import { AuthController } from "./controllers/auth.controller";
import { AuthenticationGuard } from "./common/guards/authentication.guard";
import { PermissionGuard } from "./common/guards/permission.guard";

import { UsersController } from "./controllers/users.controller";
import { ConfigService } from "./services/config/config.service";

@Module({
  imports: [],
  controllers: [
    AuthController,
    UsersController,
  ],
  providers: [
    ConfigService,
    {
      provide: 'USER_SERVICE',
      useFactory: (configService: ConfigService) => {
        const userServiceOptions = configService.get('userService');
        return ClientProxyFactory.create(userServiceOptions);
      },
      inject: [ConfigService],
    },
    {
      provide: APP_GUARD,
      useClass: AuthenticationGuard
    },
    {
      provide: APP_GUARD,
      useClass: PermissionGuard
    }
  ],
  exports: []
})

export class AppModule {}