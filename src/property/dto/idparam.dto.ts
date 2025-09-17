import { IsInt, IsPositive } from "class-validator";

export class Idparamdto{
    @IsInt()
    @IsPositive()
    id:number;
}