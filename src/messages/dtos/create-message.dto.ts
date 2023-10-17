import { IsString } from 'class-validator';

export class creteMessageDto {
  @IsString()
  content: string;
}
