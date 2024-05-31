import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up-dto';



@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post()
    create(@Body() signUpDto: SignUpDto){
        return this.authService.signUp(signUpDto);
    }
}
