import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000); // 3000 포트에서 실행
// }
// bootstrap();

import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     transform: true,
  //     forbidUnknownValues: false,
  //   })
  // );
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  await app.listen(3000);
}
bootstrap();
