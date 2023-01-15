import { Controller, Get, Header } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-Type', 'image/jpg')
  getHello() {

    return this.appService.getHello();
  }
}
