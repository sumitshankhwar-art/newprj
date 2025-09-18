import { Controller, HttpCode, HttpStatus, Post,Body, UseGuards,Get,Request} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './authGuard';

@Controller('auth')
export class AuthController {

    constructor(private authService:AuthService){

    }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto:any){
           return this.authService.signIn(signInDto.name,signInDto.password);
    }
    
    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request()req){
        return req.user;
    }
}
 