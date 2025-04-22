import { Module } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { PatientsController } from "./patients.controller";
import { PatientsService } from "./patients.service";

@Module({
  imports: [
    MulterModule.register({
      dest: "./uploads",
    }),
  ],
  controllers: [PatientsController],
  providers: [PatientsService],
})
export class PatientsModule {}
