import { Controller,Get,Post,Body,Param } from '@nestjs/common';
import { creteMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    messagesservice:MessagesService
    constructor(){
        this.messagesservice=new MessagesService() //don't do this way,make use of dependency injection instead
    } 
    @Get()
    listMessgaes(){
        return this.messagesservice.findAll();
    }
    @Post()
    createMessage(@Body() body:creteMessageDto){
      return  this.messagesservice.create(body.content)
    }
    @Get('/:id')
    getMessage(@Param('id') id:string){
        return this.messagesservice.findOne(id);
    }
}
