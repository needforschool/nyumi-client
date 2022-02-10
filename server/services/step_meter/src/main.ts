import { NestFactory } from "@nestjs/core";
import { TcpOptions, Transport } from "@nestjs/microservices";

import { ConfigService } from "./services/config/config.service";
import { StepMeterModule } from "./step-meter.module";

const bootstrap = async () => {
  const app = await NestFactory.createMicroservice(StepMeterModule, {
    transport: Transport.TCP,
    options: {
      host: "0.0.0.0",
      port: new ConfigService().get("port"),
    },
  } as TcpOptions);
  await app.listen();
};
bootstrap();
