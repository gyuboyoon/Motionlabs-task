// import { Module } from "@nestjs/common";
// // import { PatientsController } from "./patients.controller";
// // import { PatientsService } from "./patients.service";
// // import { TypeOrmModule } from "@nestjs/typeorm";
// // import { Patient } from "./entities/patient.entity";

// @Module({
//   //   imports: [TypeOrmModule.forFeature([Patient])], // TypeORM에 Patient 엔티티 연결
//   //   controllers: [PatientsController],
//   //   providers: [PatientsService],
// })
// export class PatientsModule {}

import { Module } from "@nestjs/common";
import { PatientsController } from "./patients.controller";
import { PatientsService } from "./patients.service";

@Module({
  controllers: [PatientsController],
  providers: [PatientsService],
})
export class PatientsModule {}
