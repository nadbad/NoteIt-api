import { Module } from '@nestjs/common';

import { UserModule } from 'models/users/user.module';
import { PrismaModule } from 'models/prisma/primsa.module';
import { PostModule } from 'models/posts/post.module';

@Module({
  imports: [UserModule, PrismaModule, PostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
