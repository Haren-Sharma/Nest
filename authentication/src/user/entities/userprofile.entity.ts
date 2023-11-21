import {
  AfterInsert,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('userprofile')
export class UserProfile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  age: number;

  @Column()
  sex: string;

  @Column()
  address: string;

  @AfterInsert()
  logInsert(){
    console.log("User Details Added")
  }
}
