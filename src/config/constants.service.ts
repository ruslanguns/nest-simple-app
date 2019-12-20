import { Injectable } from '@nestjs/common';
import { ConfigService } from './config.service';

// TODO: #2 Generate settings constants with configService
@Injectable()
export class ConstantsService {

    dbUsername: string;
    dbPassword: string;
    dbName: string;
    dbHost: string;
    dbPort: number;

    constructor(
        private readonly configService: ConfigService,
    ) {
        this.dbUsername = this.configService.get<string>('DB_USERNAME');
        this.dbPassword = this.configService.get<string>('DB_PASSWORD');
        this.dbName = this.configService.get<string>('DB_NAME');
        this.dbHost = this.configService.get<string>('DB_HOST');
        this.dbPort = this.configService.get<number>('DB_PORT');
    }

    public getMongoUri() {
        // Returns valid MongoURI with settings...`mongodb://username:password@host:port/database`
        return `mongodb://${this.dbUsername}:${this.dbPassword}@${this.dbHost}:${this.dbPort}/${this.dbName}`;
    }
}
