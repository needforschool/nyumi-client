import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { ConfigService } from "./services/config/config.service";
import { MongoConfigService } from "./services/config/mongo-config.service";

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongoConfigService,
      connectionName: "steps-svc",
    }),
  ],
  controllers: [],
  providers: [ConfigService],
  exports: [],
})
export class StepsModule {}
