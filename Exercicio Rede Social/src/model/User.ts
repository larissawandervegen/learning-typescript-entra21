import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  userName: string;
  @Column()
  birthDate: Date;
  @Column()
  bio: string;
  @Column()
  avatarUrl: string;
  @Column()
  email: string;
}
