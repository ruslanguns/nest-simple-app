import { Injectable, Logger } from '@nestjs/common';
import { ConstantsService } from './config/constants.service';
import { ConfigService } from './config/config.service';

@Injectable()
export class AppService {

  logger = new Logger('APP SERVICE');
  testVariable: string;
  mongoUri: string;

  constructor(
    private readonly constants: ConstantsService,
    private readonly configService: ConfigService,
  ) {
    // Using ConfigService it works...
    this.testVariable = this.configService.get('MY_VARIABLE');
    this.logger.log(this.testVariable + ' ...from AppService');

    // TODO: #3 Using My Constants Helper it doesn't --- Gets undefined
    this.mongoUri = this.constants.getMongoUri();
    this.logger.log(this.mongoUri + ' ...from AppService');
  }

  getHello(): string {
    return 'Hello World!';
  }
}
