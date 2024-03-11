import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  //class
  constructor(private readonly appService: AppService) {} //dependencie injection

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/organizations') //url
  getOrg(): string {
    return this.appService.getOrg();
  }
}
