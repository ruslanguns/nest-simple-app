import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from './config/config.service';

@Injectable()
export class AppService {

  logger = new Logger('APP SERVICE');
  testVariable: string;
  mongoUri: string;

  constructor(
    private readonly configService: ConfigService,
  ) {
    this.testVariable = this.configService.get('MY_VARIABLE');
    this.logger.log(this.testVariable + ' ...from AppService');
  }

  getHello(): string {
    return 'Hello World!';
  }
}
