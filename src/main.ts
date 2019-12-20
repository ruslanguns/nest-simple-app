import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';
import { Logger } from '@nestjs/common';

const logger = new Logger('Bootstrap');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // TODO: #1 Load ENV from ConfigService: DONE!!!
  const configService = app.get(ConfigService);
  logger.log(configService.get<string>('MY_VARIABLE') + '...from main.ts');

  await app.listen(3000);
}
bootstrap();
