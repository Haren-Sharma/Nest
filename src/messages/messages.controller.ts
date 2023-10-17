import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { creteMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesservice: MessagesService;
  constructor() {
    //don't do this way,make use of dependency injection instead
    this.messagesservice = new MessagesService();
  }
  @Get()
  listMessgaes() {
    return this.messagesservice.findAll();
  }
  @Post()
  createMessage(@Body() body: creteMessageDto) {
    return this.messagesservice.create(body.content);
  }
  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const msg = await this.messagesservice.findOne(id);
    if (!msg) throw new NotFoundException('Message Not Found');
    return msg;
  }
}
