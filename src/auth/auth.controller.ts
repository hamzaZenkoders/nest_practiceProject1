import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthPayloadDto } from './dto/auth-dto';



@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

  /*   @Post()
    create(@Body() authPayloadDto: AuthPayloadDto){
        return this.authService.signUp(authPayloadDto);
    } */
}
