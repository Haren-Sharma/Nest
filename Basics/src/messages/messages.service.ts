import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';
@Injectable()//basically marking this class for registration inside the DI container
export class MessagesService {
  //here we are not following the ioc principle
  // messagesRepo: MessagesRepository;
  // constructor() {
  //   //service is creating its own dependencies
  //   //don't do this on real apps
  //   this.messagesRepo = new MessagesRepository();
  // }

  //here we are following ioc principle
  // messagesRepo:MessagesRepository
  // constructor(messagesRepo:MessagesRepository){
  //   this.messagesRepo=messagesRepo;
  // }

  //equivalent to the above the code(using typescript syntactical sugar)
  constructor(public messagesRepo:MessagesRepository){} 
  async findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }
  async findAll() {
    return this.messagesRepo.findAll();
  }
  async create(content: string) {
    return this.messagesRepo.create(content);
  }
}
