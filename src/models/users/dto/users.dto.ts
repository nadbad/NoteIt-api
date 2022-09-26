import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  role: Role;
}

export class UpdatePasswordDto {
  @IsNotEmpty()
  @ApiProperty()
  new_password: string;

  @IsNotEmpty()
  @ApiProperty()
  old_password: string;
}

export class LoginUserDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly password: string;
}
