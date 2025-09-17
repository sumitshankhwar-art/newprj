import { Optional } from "@nestjs/common";
import { IsInt, IsPositive } from "class-validator";

export class PaginationDto{
    
    @Optional()
    @IsInt()
    @IsPositive()
    skip:number;
    
    @Optional()
    @IsInt()
    @IsPositive()
    limit:number;
}