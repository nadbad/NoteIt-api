import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AppConfigService } from './config.service';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
      isGlobal: false,
      validationSchema: Joi.object({
        SERVER_OS: Joi.string().required().valid('win', 'linux'),
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test')
          .required(),
        PORT: Joi.number().required(),
        JWT_ACCESS_SECRET: Joi.string().required(),
        JWT_ACCESS_EXPIRATION_TIME: Joi.number().required(),
        JWT_REFRESH_TOKEN_SECRET: Joi.string().required(),
        JWT_REFRESH_TOKEN_EXPIRATION_TIME: Joi.string().required(),
        DATABASE_HOST: Joi.string().required(),
        DATABASE_USERNAME: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        REDIS_HOST: Joi.string().required(),
        REDIS_PORT: Joi.number().required(),
        MINIO_HOST: Joi.string().required(),
        MINIO_API_PORT: Joi.number().required(),
        MINIO_SSL: Joi.boolean().required(),
        MINIO_ROOT_USER: Joi.string().required(),
        MINIO_ROOT_PASSWORD: Joi.string().required(),
        RATE_LIMIT_PUBLIC_POINTS: Joi.number().required(),
        RATE_LIMIT_PUBLIC_DURATION: Joi.number().required(),
        RATE_LIMIT_AUTHENTICATED_POINTS: Joi.number().required(),
        RATE_LIMIT_AUTHENTICATED_DURATION: Joi.number().required(),
        MAIL_HOST: Joi.string().required(),
        MAIL_PORT: Joi.number().required(),
        MAIL_USER: Joi.string().required(),
        MAIL_PASSWORD: Joi.string().required(),
        MAIL_RETRIES: Joi.number().required(),
        MAIL_FROM: Joi.string().required(),
        MAIL_NAME: Joi.string().required(),
        ADMIN_FRONTEND_URL: Joi.string().required(),
        TENANT_FRONTEND_URL: Joi.string().required(),
      }),
    }),
  ],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}
