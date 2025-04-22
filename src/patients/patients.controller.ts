import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UploadedFile,
  UseInterceptors,
  Req,
  BadRequestException,
} from "@nestjs/common";
import { PatientsService } from "./patients.service";
import { CreatePatientDto } from "./dto/create-patient.dto";

import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import * as path from "path";
import { Express, Request } from "express";

@Controller("patients")
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post("upload")
  @UseInterceptors(
    FileInterceptor("file", {
      storage: diskStorage({
        destination: "./uploads",
        filename: (req, file, cb) => {
          const ext = path.extname(file.originalname);
          cb(null, `${Date.now()}${ext}`);
        },
      }),
    })
  )
  // async uploadExcel(@UploadedFile("file") file: Express.Multer.File) {
  //   console.log("업로드된 파일:", file);
  //   if (!file || !file.path) {
  //     throw new BadRequestException("파일이 업로드되지 않았습니다.");
  //   }

  //   return this.patientsService.parseAndSaveExcel(file);
  // }
  async uploadExcel(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: any,
    @Req() req: Request
  ) {
    console.log("body:", body);
    console.log("req.file:", req.file);
    console.log("file:", file);
  }

  @Post()
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientsService.create(createPatientDto);
  }

  @Get()
  findAll() {
    return this.patientsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.patientsService.findOne(+id);
  }
}
// import { Controller, Get, Post, Body, Param } from "@nestjs/common";
