import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';

// Testing MongooseModule
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRootAsync({
      useFactory: () => ({ // TODO: #4 Get ConfigService Variables or Helper Class to provide sencitive data provided
        uri: 'mongodb://nest:nest123@localhost:27017/nest-simple-app',
        authSource: 'admin',
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
