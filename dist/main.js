"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000); // 3000 포트에서 실행
// }
// bootstrap();
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    // app.useGlobalPipes(new ValidationPipe());
    // app.useGlobalPipes(
    //   new ValidationPipe({
    //     transform: true,
    //     forbidUnknownValues: false,
    //   })
    // );
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    await app.listen(3000);
}
bootstrap();
