import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { UserSchema } from "./schemas/user.schema";
import { ConfigService } from "./services/config/config.service";
import { MongoConfigService } from "./services/config/mongo-config.service";
import { UserService } from "./services/user.service";
import { UserController } from "./controllers/user.controller";
import { TokenModule } from "./token.module";

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongoConfigService,
      connectionName: 'user-svc'
    }),
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema,
        collection: 'users'
      }
    ], 'user-svc'),
    TokenModule
  ],
  controllers: [
    UserController
  ],
  providers: [
    UserService,
    ConfigService
  ],
  exports: []
})

export class UserModule {}