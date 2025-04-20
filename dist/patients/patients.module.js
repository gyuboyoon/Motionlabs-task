"use strict";
// import { Module } from "@nestjs/common";
// // import { PatientsController } from "./patients.controller";
// // import { PatientsService } from "./patients.service";
// // import { TypeOrmModule } from "@nestjs/typeorm";
// // import { Patient } from "./entities/patient.entity";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientsModule = void 0;
// @Module({
//   //   imports: [TypeOrmModule.forFeature([Patient])], // TypeORM에 Patient 엔티티 연결
//   //   controllers: [PatientsController],
//   //   providers: [PatientsService],
// })
// export class PatientsModule {}
const common_1 = require("@nestjs/common");
const patients_controller_1 = require("./patients.controller");
const patients_service_1 = require("./patients.service");
let PatientsModule = class PatientsModule {
};
exports.PatientsModule = PatientsModule;
exports.PatientsModule = PatientsModule = __decorate([
    (0, common_1.Module)({
        controllers: [patients_controller_1.PatientsController],
        providers: [patients_service_1.PatientsService],
    })
], PatientsModule);
