import { IsEmail, IsString, Min, Max } from 'class-validator';

export class createUserDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
