import { Module } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { PatientsModule } from "./patients/patients.module";

@Module({
  imports: [
    MulterModule.register({
      dest: "./uploads", // 저장 경로
    }),
    PatientsModule,
  ],
})
export class AppModule {}
