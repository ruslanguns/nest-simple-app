import { Injectable } from '@nestjs/common';
import { ConfigManager } from '@nestjsplus/config';
import * as Joi from '@hapi/joi';

@Injectable()
export class ConfigService extends ConfigManager {
    provideConfigSpec() {
        return {
            MY_VARIABLE: {
                validate: Joi.string(),
                required: false,
                default: 'My default Hello World.',
            },
            DATABASE_USERNAME: {
                validate: Joi.string(),
                required: true,
            },
            DATABASE_PASSWORD: {
                validate: Joi.string(),
                required: true,
            },
            DATABASE_NAME: {
                validate: Joi.string(),
                required: true,
            },
            DATABASE_HOST: {
                validate: Joi.string(),
                required: true,
            },
            DATABASE_PORT: {
                validate: Joi.number(),
                required: true,
            },
        };
    }

    // Compatible with forRootAsync() config method
    public createMongooseOptions() {
        return {
            uri: `mongodb://${this.get<string>('DATABASE_USERNAME')}:${this.get<string>('DATABASE_PASSWORD')}@${this.get<string>('DATABASE_HOST')}:${this.get<string>('DATABASE_PORT')}/${this.get<string>('DATABASE_NAME')}`,
            authSource: 'admin',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
    }
}
