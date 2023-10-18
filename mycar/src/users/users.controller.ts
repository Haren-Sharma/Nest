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
} from '@nestjs/common';
import { UserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post('/signup')
  createUser(@Body() body: UserDto) {
    this.userService.create(body.email, body.password);
  }
  @Get('/:id')
  async findUser(@Param('id', ParseIntPipe) id: number) {
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
