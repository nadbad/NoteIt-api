import { Module } from '@nestjs/common';

import { UsersModule } from 'models/users/user.module';
import { PrismaModule } from 'models/prisma/primsa.module';
import { PostModule } from 'models/posts/post.module';
import { AuthModule } from 'auth/auth.module';

@Module({
  imports: [AuthModule, UsersModule, PrismaModule, PostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
