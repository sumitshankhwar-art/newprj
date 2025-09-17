import { Optional } from "@nestjs/common";
import { IsEmail, IsOptional, IsString, IsUrl} from "class-validator";

export class CreateUserDto {
    @IsString()
    firstName:string;

    @IsString()
    lastName:string;

    @IsString()
    @IsEmail()
    email:string;

    @IsString()
    password:string;

    @IsString()
    @IsOptional()
    @IsUrl()
    avtarUrl?:string;
    
    
}
