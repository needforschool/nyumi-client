import { Transport } from "@nestjs/microservices";

export class ConfigService {
  private readonly envConfig: { [key: string]: any } = null;

  constructor() {
    this.envConfig = {};
    this.envConfig.port = process.env.API_GATEWAY_PORT || 8080;
    this.envConfig.userService = {
      options: {
        host: process.env.USER_SERVICE_HOST,
        port: process.env.USER_SERVICE_PORT,
      },
      transport: Transport.TCP,
    };
  }

  get(key: string): any {
    return this.envConfig[key];
  }
}
