import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
    constructor(private userService:UserService,
       private jwtService:JwtService
    ){}

    async signIn(firstName:string,password:string):Promise<any>{

        const user = await this.userService.findByName(firstName);
        if(!user){
            throw new NotFoundException();
        }
       
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            throw new UnauthorizedException();
        }
        const payload = {sub:user.id,name:user.firstName};
         
        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }
}
