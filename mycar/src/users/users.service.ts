import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  create(email: string, password: string) {
    const user = this.userRepository.create({ email, password }); //created an instance
    //when we create an instance and then save it
    //typeorm hooks get executed
    //i.e why it is very benefitial to create an instance and then saving it
    //rather than directly saving it
    return this.userRepository.save(user);
  }
  findOne(id: number) {
    return this.userRepository.findOneBy({ id });
  }
  find(email: string) {
    return this.userRepository.find({ where: { email } });
  }
  async update(id: number, attrs: Partial<User>) {
    //Partial:In typescript,object passed will have none or some properties or all the properties of User entity
    const user = await this.findOne(id);
    if(!user){
        throw new NotFoundException("User not found");
    }
    Object.assign(user,attrs);
    return this.userRepository.save(user);
  }
  async remove(id:number){
    const user=await this.findOne(id);
    if(!user){
        throw new NotFoundException("User not found");
    }
    return this.userRepository.remove(user); 
  }
}
