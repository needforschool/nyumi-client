import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { MongooseModule } from "@nestjs/mongoose";

import { TokenController } from "./controllers/token.controller";
import { TokenSchema } from "./schemas/token.schema";
import { JwtConfigService } from "./services/config/jwt-config.service";
import { MongoConfigService } from "./services/config/mongo-config.service";
import { TokenService } from "./services/token.service";

@Module({
  imports: [
    JwtModule.registerAsync({
      useClass: JwtConfigService,
    }),
    MongooseModule.forRootAsync({
      useClass: MongoConfigService,
      connectionName: "user-svc-tokens",
    }),
    MongooseModule.forFeature(
      [
        {
          name: "Token",
          schema: TokenSchema,
          collection: "tokens",
        },
      ],
      "user-svc-tokens"
    ),
  ],
  controllers: [TokenController],
  providers: [TokenService],
})
export class TokenModule {}
