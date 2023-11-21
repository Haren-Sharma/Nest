import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    constructor(){}
    
    @Post('/signup')
    createUser(){

    }

    @Post('/signIn')
    signIn(){
        
    }
}
