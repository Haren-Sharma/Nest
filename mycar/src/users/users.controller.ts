import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { UserDto } from './dtos/create-user.dto';
import {
  Serialize,
  SerializeInterceptor,
} from 'src/interceptors/serialize.interceptor';
import { UsersService } from './users.service';
import { userdto } from './dtos/user.dto';

@Controller('auth')
@Serialize(userdto) //controller wide serialization
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/signup')
  createUser(@Body() body: UserDto) {
    this.userService.create(body.email, body.password);
  }

  //   @UseInterceptors(ClassSerializerInterceptor)
  //   @UseInterceptors(new SerializeInterceptor(userdto))
  //   @Serialize(userdto) //cutom decorator //decorator is nothing but a function
  @Get('/:id')
  async findUser(@Param('id', ParseIntPipe) id: number) {
    console.log('handler is running');
    const user = await this.userService.findOne(id);
    if (!user) {
      throw new NotFoundException('User doesnot exist');
    }
    return user;
  }

  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.userService.find(email);
  }

  @Patch('/:id')
  updateUser(
    @Body() body: Partial<UserDto>,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.userService.update(id, body);
  }

  @Delete('/:id')
  removeUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}
