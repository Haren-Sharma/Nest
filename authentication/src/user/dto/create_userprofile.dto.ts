import { Contains, IsNumber, Length, Max } from 'class-validator';

export class userprofileDto {
  @IsNumber()
  age: number;

  @Length(1, 1)
  @Contains('M' || 'F' || 'O', {
    message: 'Either M(male),F(female) and O(other) is acceptable',
  })
  sex: string;

  address: string;
}
