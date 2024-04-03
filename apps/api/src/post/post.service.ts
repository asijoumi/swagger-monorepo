import { Post } from '@app/database/models/post';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(private readonly dataSource: DataSource) {}

  create(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  async findAll() {
    return await this.dataSource
      .getRepository(Post)
      .createQueryBuilder()
      .getMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
