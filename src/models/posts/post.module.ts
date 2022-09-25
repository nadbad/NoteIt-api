import { Module } from '@nestjs/common';
import { PostsController } from 'models/posts/post.controller';
import { PostService } from 'models/posts/post.service';

@Module({
  controllers: [PostsController],
  providers: [PostService],
  exports: [PostService],
})
export class PostModule {}
