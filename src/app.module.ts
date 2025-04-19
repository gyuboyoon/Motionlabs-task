import { Module } from "@nestjs/common";
import { PatientsModule } from "../src/patients/patients.module.ts";

@Module({
  imports: [PatientsModule],
})
export class AppModule {}
