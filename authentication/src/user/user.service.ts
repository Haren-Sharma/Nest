import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCred } from './entities/auth.entity';
import { QueryFailedError, Repository } from 'typeorm';
import { UserProfile } from './entities/userprofile.entity';
import { createUserDto } from './dto/create_user.dto';
import { userprofileDto } from './dto/create_userprofile.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(AuthCred) private credrepo: Repository<AuthCred>,
    @InjectRepository(UserProfile) private userrepo: Repository<UserProfile>,
  ) {}

  async createUser(cred: createUserDto) {
    try {
      const user = this.credrepo.create(cred);
      return await this.credrepo.save(user);
    } catch (err) {
      if (err instanceof QueryFailedError) {
        if (
          err.message.includes('duplicate key value violates unique constraint')
        ) {
          return 'User already exists';
        } else {
          return err.message;
        }
      }
    }
  }

  async getUserDetailsById(id: string) {
    const user=await this.credrepo.findOne({relations:{profile:true},where:{id}});
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  async addUserDetails(details: userprofileDto, userId: string) {
    const profile = this.userrepo.create(details);
    const user = await this.credrepo.findOneBy({ id: userId });
    if (!user) {
      throw new NotFoundException();
    }
    user.profile=profile;
    await this.credrepo.save(user);
    try {
      return await this.userrepo.save(profile);
    } catch (err) {
      return err.message;
    }
  }
}
