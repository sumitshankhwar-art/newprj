import { IsInt, IsPositive, IsString, Length } from 'class-validator';

export class createPropertyDto {
  @IsString()
  @Length(2, 10, {
    message: 'error : length should be less than 10 and greater than 2',
  })
  name: string;
  @IsString()
  description: string;
  @IsInt()
  @IsPositive()
  area: number;

  @IsInt()
  @IsPositive()
  price:number;
}
