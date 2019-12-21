import { Module, Global } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigManagerModule } from '@nestjsplus/config';
import { join } from 'path';

@Global()
@Module({
  imports: [
    ConfigManagerModule.register({
      useFile: join(__dirname, '../../config/development.env'),
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule { }
