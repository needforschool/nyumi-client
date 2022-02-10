import {
  MongooseOptionsFactory,
  MongooseModuleOptions,
} from '@nestjs/mongoose';

export class MongoConfigService implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: process.env.MONGO_DSN,
      dbName: process.env.STEP_METER_SERVICE_DATABASE_NAME
    };
  }
}