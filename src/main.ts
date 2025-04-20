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
  app.useGlobalPipes(new ValidationPipe()); // 🔥 이 줄 추가
  await app.listen(3000);
}
bootstrap();
