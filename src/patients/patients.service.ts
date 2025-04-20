import { Injectable } from "@nestjs/common";
import { CreatePatientDto } from "./dto/create-patient.dto";

@Injectable()
export class PatientsService {
  private patients = [];

  create(createPatientDto: CreatePatientDto) {
    const newPatient = { id: Date.now(), ...createPatientDto };
    this.patients.push(newPatient);
    return newPatient;
  }

  findAll() {
    return this.patients;
  }

  findOne(id: number) {
    return this.patients.find((patient) => patient.id === id);
  }
}
