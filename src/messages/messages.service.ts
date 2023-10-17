import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';
@Injectable()
export class MessagesService {
  messagesRepo: MessagesRepository;
  constructor() {
    //service is creating its own dependencies
    //don't do this on real apps
    this.messagesRepo = new MessagesRepository();
  }
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
