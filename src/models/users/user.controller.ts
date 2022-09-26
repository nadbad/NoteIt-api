import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from 'models/users/user.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

import { User as UserModel } from '@prisma/client';

import { CreateUserDto } from './dto/CreateUser.dto';

@ApiTags('Users')
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  async findAll(): Promise<UserModel[]> {
    return this.userService.users({});
  }

  @Get('user/:id')
  async findUser(@Param('id') id: string): Promise<UserModel> {
    return this.userService.user({ id: Number(id) });
  }

  @Post('user')
  async signupUser(@Body() createUserDto: CreateUserDto): Promise<UserModel> {
    return this.userService.createUser(createUserDto);
  }
}
