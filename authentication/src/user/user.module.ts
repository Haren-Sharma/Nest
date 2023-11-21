import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthCred } from './entities/auth.entity';
import { UserProfile } from './entities/userprofile.entity';

@Module({
  imports:[TypeOrmModule.forFeature([AuthCred,UserProfile])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
