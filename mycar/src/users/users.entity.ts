// import { Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
} from 'typeorm';
//create an entity file,and create a class in it that lists all the properties that your entity will have
// and then follow the next 2 steps
//step1
//connect the entity to its parent module.This creates a repository
//step2
//connect the entity to the root connection(in the app module)
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  // @Exclude() 
  /*userentity instance converted to plain object converted to json then it will exclude password
  these are simply the rules,that the interceptor will follow*/
  //but a better approach is to use custom interceptors
  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted user with id ', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated user with id ', this.id);
  }

  @AfterRemove()
  logDelete() {
    console.log('Deleted the user with id ', this.id);
  }
}
