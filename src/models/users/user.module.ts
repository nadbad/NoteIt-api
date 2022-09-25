import { Module } from '@nestjs/common';
import { UserController } from 'models/users/user.controller';
import { UserService } from 'models/users/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
