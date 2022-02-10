import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProfileController } from "./controllers/profile.controller";

import { ProfileSchema } from "./schemas/profile.schema";
import { ConfigService } from "./services/config/config.service";
import { MongoConfigService } from "./services/config/mongo-config.service";
import { ProfileService } from "./services/profile.service";

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongoConfigService,
      connectionName: "profile-svc",
    }),
    MongooseModule.forFeature(
      [
        {
          name: "Profile",
          schema: ProfileSchema,
          collection: "profiles",
        },
      ],
      "profile-svc"
    ),
  ],
  controllers: [ProfileController],
  providers: [ConfigService, ProfileService],
  exports: [],
})
export class ProfileModule {}
