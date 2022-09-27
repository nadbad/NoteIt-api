import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Config } from './config.interface';

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService) {}

  get jwtConfig(): Config['jwtConfig'] {
    return {
      accessSecret: this.configService.get<string>('JWT_ACCESS_SECRET'),
      accessExpiresIn: this.configService.get<string>(
        'JWT_ACCESS_EXPIRATION_TIME',
      ),
      refreshSecret: this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET'),
      refreshExpiresIn: this.configService.get<string>(
        'JWT_REFRESH_TOKEN_EXPIRATION_TIME',
      ),
    };
  }
}
