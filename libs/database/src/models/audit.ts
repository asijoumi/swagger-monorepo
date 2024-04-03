import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Audit extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  url: string;

  @Column({ nullable: true })
  method: string;

  @Column({ nullable: true })
  duration: string;

  @Column({ nullable: true })
  response_code: string;
}
