import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('request_http_axio')
  async getTestAxios(): Promise<any> {
    return this.appService.getTestAxios();
  }

  @Post('test_amadeus')
  async testAmadeus(): Promise<any> {
    return this.appService.testAmadeus();
  }
}
