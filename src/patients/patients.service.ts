import { Injectable } from "@nestjs/common";
import { CreatePatientDto } from "./dto/create-patient.dto";

// patients.service.ts

// 🔽 이걸 파일 제일 위에 추가!
interface Patient {
  id: number;
  name: string;
  age: number;
  disease: string;
}

@Injectable()
export class PatientsService {
  // 🔽 이렇게 타입 명시!
  private patients: Patient[] = [];

  create(createPatientDto: CreatePatientDto): Patient {
    const newPatient: Patient = {
      id: Date.now(),
      ...createPatientDto,
    };
    this.patients.push(newPatient);
    return newPatient;
  }

  findAll(): Patient[] {
    return this.patients;
  }

  findOne(id: number): Patient | undefined {
    return this.patients.find((patient) => patient.id === id);
  }
}
