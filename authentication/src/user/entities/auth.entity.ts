import { AfterInsert, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserProfile } from './userprofile.entity';

@Entity('credentials')
export class AuthCred {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({unique:true})
  username: string;

  @Column({unique:true})
  email: string;

  @Column()
  password: string;

  @OneToOne(() => UserProfile)
  @JoinColumn()
  profile: UserProfile;

  @AfterInsert()
  logInsert(){
    console.log("New User Created");
  }
}
