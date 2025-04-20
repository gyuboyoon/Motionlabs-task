// export class CreatePatientDto {
//   name: string;
//   age: number;
//   disease: string;
// }

import { IsString, IsInt } from "class-validator";

export class CreatePatientDto {
  @IsString()
  name!: string;

  @IsInt()
  age!: number;

  @IsString()
  disease!: string;
}
