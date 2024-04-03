import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        console.log(path.join(__dirname, './models/*.{ts,js}'));
        const dataSource = new DataSource({
          type: 'sqlite',
          database: 'database.db',
          synchronize: true,
          entities: [path.join(__dirname, './models/*.{ts,js}')],
        });

        await dataSource.initialize();
        return dataSource.options;
      },
    }),
  ],
})
export class DatabaseModule {}
