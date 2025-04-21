"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientsService = void 0;
const common_1 = require("@nestjs/common");
const xlsx = __importStar(require("xlsx"));
let PatientsService = class PatientsService {
    constructor() {
        this.patients = [];
    }
    create(createPatientDto) {
        const newPatient = {
            id: Date.now(),
            ...createPatientDto,
        };
        this.patients.push(newPatient);
        return newPatient;
    }
    findAll() {
        return this.patients;
    }
    findOne(id) {
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
    async parseAndSaveExcel(file) {
        const workbook = xlsx.readFile(file.path); // string 아님, file.path 사용
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const data = xlsx.utils.sheet_to_json(sheet);
        const patients = data.map((item) => {
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
};
exports.PatientsService = PatientsService;
exports.PatientsService = PatientsService = __decorate([
    (0, common_1.Injectable)()
], PatientsService);
