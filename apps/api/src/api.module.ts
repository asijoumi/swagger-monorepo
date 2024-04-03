import { DatabaseModule } from '@app/database';
import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [DatabaseModule, PostModule, CategoryModule],
})
export class ApiModule {}
