import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UsersController } from './user.controller';
import { PrismaService } from 'models/prisma/prisma.service';

@Module({
  imports: [],
  exports: [],
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
})
export class UsersModule {}
