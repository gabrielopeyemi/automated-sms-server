import { Controller, Get } from '@nestjs/common';
import { AppService, DataArgs } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): DataArgs {
    return this.appService.getHello();
  }
}
