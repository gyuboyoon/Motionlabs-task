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
  @UseInterceptors(FileInterceptor("file"))
  async uploadExcel(@UploadedFile() file: Express.Multer.File) {
    console.log("file:", file); // 콘솔에서 꼭 확인!
    if (!file) {
      throw new BadRequestException("파일이 없습니다.");
    }
    return { message: "업로드 성공!", filename: file.filename };
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
