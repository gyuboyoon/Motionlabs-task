import { Injectable } from "@nestjs/common";
import { CreatePatientDto } from "./dto/create-patient.dto";
import * as xlsx from "xlsx";
import { Patient } from "./dto/entities/patient.entity";

@Injectable()
export class PatientsService {
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

  // parseAndSaveExcel(filePath: string): { message: string; data: Patient[] } {
  //   const workbook = xlsx.readFile(filePath);
  //   const sheetName = workbook.SheetNames[0];
  //   const sheet = workbook.Sheets[sheetName];

  //   const rows: any[] = xlsx.utils.sheet_to_json(sheet);

  //   const createdPatients: Patient[] = [];

  //   rows.forEach((row) => {
  //     const dto: CreatePatientDto = {
  //       name: row["name"],
  //       age: Number(row["age"]),
  //       disease: row["disease"],
  //     };

  //     const newPatient = this.create(dto);
  //     createdPatients.push(newPatient);
  //   });

  //   return {
  //     message: "엑셀 파일에서 환자 데이터를 성공적으로 저장했습니다.",
  //     data: createdPatients,
  //   };
  // }

  async parseAndSaveExcel(file: Express.Multer.File) {
    const workbook = xlsx.readFile(file.path); // string 아님, file.path 사용
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(sheet);

    const patients = data.map((item: any) => {
      return {
        name: item.name,
        age: item.age,
        disease: item.disease,
      };
    });

    // 여기에 DB 저장 로직을 넣을 수도 있고, 지금은 그냥 JSON 반환
    return {
      message: "엑셀 업로드 성공!",
      data: patients,
    };
  }
}
