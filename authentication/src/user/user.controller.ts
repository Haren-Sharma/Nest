import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createUserDto } from './dto/create_user.dto';
import { userprofileDto } from './dto/create_userprofile.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){}

    @Get('/:id')
    getUserDetails(@Param('id') id:string){
        return this.userService.getUserDetailsById(id)
    }

    @Post()
    createUser(@Body() body:createUserDto){
        return this.userService.createUser(body);
    }

    @Post('/:id')
    addUserDetails(@Body() body:userprofileDto,@Param('id') id:string){
        return this.userService.addUserDetails(body,id);
    }

}
